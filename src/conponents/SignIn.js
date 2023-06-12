import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";

function SignIn() {
  function signInWhithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="header">
      <Button style={{fontSize:"15px", fontWeight:"bold", color:"gray", background:"#fff"}} onClick={signInWhithGoogle}>グーグルでログインする</Button>
    </div>
  );
}

export default SignIn;
