import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route  path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
