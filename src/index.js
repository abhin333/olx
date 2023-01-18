import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FirebaseContext } from "./Store/FirebaseContext";
import {firebase,auth} from "./Firebase/Config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{firebase,auth}}>
    <App />
  </FirebaseContext.Provider>
);
