import React, { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import { screensData } from "../App";

export default function Seat() {   
    const timing=localStorage.getItem("timing") 
    let screen=screensData.filter((data)=>timing===data.time) 
    let currentScreen=screen[0].seats
    console.log(currentScreen); 

    let [clr,setClr]=useState(false)
    // useEffect(()=>{

    // },[])
  return (
    <div className="seats-outer">
      <div className="col-lg-3">
        <Sidenav />
      </div> 
      <div className="seats-main-outer col-lg-9 ">
        <div className="seats-main">
        {currentScreen.map((d,idx)=>{
            return(
                <button className="seat">{d.name}</button>
            )
        })}
        </div>
      </div>
    </div>
  );
}
