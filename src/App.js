import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Post/Login/Login";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
