import { TextField } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div className="login-outer">
      <div className="login">
        <h1>SignIn</h1>
        <p>Lorem ipsum dolor sit amet adipiscing elit. </p>
        <TextField
          id="outlined-basic"
          label="Enter Your Name"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Enter Your Password"
          variant="outlined"
        />
        <Button variant="dark">Dark</Button>
      </div>
    </div>
  );
}
