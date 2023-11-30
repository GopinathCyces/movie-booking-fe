import React from "react";
import Sidenav from "./Sidenav";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const navigate=useNavigate()
    function Signout(){
        localStorage.clear()
        navigate("/login")
    }
  return (
    <div className="account-outer">
      <div className="col-lg-3">
        <Sidenav />
      </div>
      <div className="account-main-space col-lg-9">
        <div className="account-inside">
        <Button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:0}} onClick={()=>Signout()}>Delete your Account</Button>
        <p>This will lead to login screen</p>
        </div>
      </div>
    </div>
  );
}
