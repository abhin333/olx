import React, { useEffect, useContext, useState } from "react";
import { FirebaseContext } from "../../Store/FirebaseContext";
import { PostContext } from "../../Store/PostContext";
import Header from "../Header/Header";
import "./View.css";
import { db } from "../../Firebase/Config";
import * as firestore from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { render } from "@testing-library/react";
import { AuthContext } from "../../Store/FirebaseContext";
import { Navigate, useNavigate } from "react-router-dom";

function View() {
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const { user } = useContext(AuthContext);
  const Navigate=useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (user)
    {
      setShow(true)
      }
    else {
      alert('please login')
      Navigate('/login')
    }
  }
  useEffect(() => {
    console.log("id", user);
    try {
      firestore
        .getDocs(firestore.collection(db, "users"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setUserDetails(doc.data());
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    try {
      const def = addDoc(collection(db, "buyer"), {
        name: name,
        phone: phone,
        email: email,
        address: address,
        prdoductid: postDetails.id,
        prducturl:postDetails.url
      }).then(() => {
        alert("oder confirmed");
        render()
      });
    } catch (err) {
      alert(err);
    }

  };
  return (
    <div>
      <Header />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Buyer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="modal-body mx-1">
              <div class="md-form mb-1">
                <i class="fas fa-user prefix grey-text"></i>
                <label data-error="wrong" data-success="right" for="form34">
                  Enter name
                </label>
                <input
                  type="text"
                  id="name"
                  class="form-control validate"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>

              <div class="md-form mb-1">
                <i class="fas fa-envelope prefix grey-text"></i>
                <label data-error="wrong" data-success="right" for="form29">
                  Enter email
                </label>
                <input
                  type="email"
                  id="email"
                  class="form-control validate"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              <div class="md-form mb-1">
                <i class="fas fa-tag prefix grey-text"></i>
                <label data-error="wrong" data-success="right" for="form32">
                  Enter phone number
                </label>
                <input
                  type="text"
                  id="phone"
                  class="form-control validate"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
              <div class="md-form mb-5">
                <i class="fas fa-tag prefix grey-text"></i>
                <label data-error="wrong" data-success="right" for="form32">
                  Enter Address
                </label>
                <input
                  type="text"
                  rows="4"
                  id="address"
                  class="form-control validate"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </div>
              <div className="button">
                <button
                  className="button-3"
                  name="buttonclose"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  className="button-3"
                  name="buttonsubmit"
                  onClick={handleClick}
              >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

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
          <div className="button">
            <button className="button-3" onClick={() => handleShow()}>
              Buy Now
            </button>
            <button className="button-3">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
