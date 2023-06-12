import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase.js";
import CallIcon from "@mui/icons-material/Call";
function SignOut() {
  return (
    <div className="header">
      <Button style={{fontSize:"15px", fontWeight:"bold", color:"gray", background:"#fff"}} onClick={() => auth.signOut()}>サインアウト</Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  );
}

export default SignOut;
