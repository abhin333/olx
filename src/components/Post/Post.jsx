import React, { useContext, useEffect, useState } from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import bike from "../../../src/images/bike.jpg";
import { FirebaseContext } from "../../Store/FirebaseContext";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../Firebase/Config";

function Post() {
  const { firebase } = useContext(FirebaseContext);
  const [product, setProduct] = useState([]);
  const fetchBlogs = async (e) => {
    const q = query(collection(db, "product"));
    const querySnapshot = await getDocs(q);
    const allPost = querySnapshot.docs.map((product) => {
      console.log("p",  product._document.data.value.mapValue.fields );
      return {
        ...product.data(),
        id: product.id,
      };
    });
    setProduct(allPost);
    console.log("ddd");
  };
  console.log("rrrrr",product);
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {product.map((products ) => {
            console.log("wwww", products.id );
          return(
            <div className="card">
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={products.url} alt="logo" className="photo"/>
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {products.price}</p>
                <span className="kilometer">{ products.categeory}</span>
                <p className="name"> {products.name }</p>
              </div>
              <div className="date">
                <span>{products.createDate }</span>
              </div>
                </div>)
        })
        
      }
      </div>
          
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bike} alt="bike"className="photo" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
