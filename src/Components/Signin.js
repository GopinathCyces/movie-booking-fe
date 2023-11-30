import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate()
  const [name, setName] = useState("") 

  function Signup(){
    localStorage.setItem("name",name)
    navigate("/movies")
  }
  return (
    <div className="signup-outer">
      <form className="signup" onSubmit={()=>Signup()}>
        <h1 style={{fontWeight:"700"}}>Sign Up</h1>
        <p>Lorem ipsum dolor sit amet adipiscing elit. </p>
        <TextField 
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
        <TextField 
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <Button type="submit" variant="dark">Sign up</Button>
      </form>
    </div>
  );
}
