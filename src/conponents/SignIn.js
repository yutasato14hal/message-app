import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import Button from "@mui/material/Button";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="header">
      <Button onClick={signInWithGoogle} style={{fontSize:"15px", fontWeight:"bold", color:"gray", background:"#fff"}} >グーグルでログインする</Button>
   <div>本番環境で動作しなくなったため、調整中です。</div>
    </div>
  );
}

export default SignIn; 
