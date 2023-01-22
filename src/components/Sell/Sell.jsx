import React, { Fragment, useContext, useState } from "react";
import Header from "../Header/Header";
import "./Sell.css";
import { FirebaseContext, AuthContext } from "../../Store/FirebaseContext";
import img from "../../images/olx.png";
import { storage } from "../../Firebase/Config";
import { ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/Config";
import { useNavigate } from "react-router-dom";
function Sell() {

  const [name, setName] = useState();
  const [categeory, setCategeory] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const Navigate=useNavigate()
 const date = new Date();
  const handeleSubmit = (e) => {
    console.log("ssssaw", e);
    e.preventDefault();
    console.log("sssssss", e);
    const b = ref(storage, `/images/${image.name}`)
    uploadBytes(b, image).then(({ snapshot }) => {
      console.log('Uploaded a blob or file!');
    try {
      const def = addDoc(collection(db, "product"), {
        userId: user.uid,
        name: name,
        categeory: categeory,
        price: price,
        createdate:date.toString()
      }).then(() => {
        alert("successfuly Entered");
        Navigate('/')
      })
    } catch (err) {
      alert(err);
    }
    });
    console.log("ppppppppp", b);
  };

  return (
    <Fragment>
      <Header />
      <card>
        <img src={img} alt="" style={{ opacity: 0.5 }} />
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e) => setCategeory(e.target.value)}
              value={categeory}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <br />
          </form>
          <br />
          {image ? (
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : ""}
            ></img>
          ) : (
            ""
          )}
          <form>
            <br />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <br />
            <button onClick={handeleSubmit} className="uploadBtn">
              upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
}

export default Sell;
