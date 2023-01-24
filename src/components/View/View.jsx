import React, { useEffect, useContext, useState } from "react";
import { FirebaseContext } from "../../Store/FirebaseContext";
import { PostContext } from "../../Store/PostContext";
import Header from "../Header/Header";
import "./View.css";
import { db } from "../../Firebase/Config";
import * as firestore from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
 function View() {
  const [userDetails, setUserDetails] = useState('');
  const { postDetails } = useContext(PostContext);
   const { firebase } = useContext(FirebaseContext);
   const [userId, setUserId] = useState("");
   useEffect(() => { 
    
     console.log("id",userId);
     try {
      firestore
        .getDocs(firestore.collection(db,"users"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log("wwww", doc.data());
            setUserDetails(doc.data())
          });
        });
     }catch(error)  {
      console.log(error); 
     }
   },[])
console.log("postdeataisl",postDetails);
  return (
    <div>
      <Header />

      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={postDetails.url} alt="logo" />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetails.price} </p>
            <span>{postDetails.name}</span>
            <p>{postDetails.categeory}</p>
            <span>{postDetails.createDate}</span>
          </div>

          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
