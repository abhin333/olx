import React, { useEffect, useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Post/Login/Login";
import { AuthContext, FirebaseContext } from "./Store/FirebaseContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Create from "./pages/Create";
import View from "./pages/view"
import Post from "./Store/PostContext"
const App = () => {
  const auth = getAuth();
  const { user, setUser } = useContext(AuthContext);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, []);
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
          <Routes>
            <Route path="/view" element={<View />} />
          </Routes>
        </Router>
      </Post>
    </div>
  );
};

export default App;
