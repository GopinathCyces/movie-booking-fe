import React, { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import { screensData } from "../App";

export default function Seat() {   
    const timing=localStorage.getItem("timing") 
    let screen=screensData.filter((data)=>timing===data.time) 
    let currentScreen=screen[0].seats
    // console.log(currentScreen); 
    
    // let bookedSeats=[1,2,5,4] 
    let [bookedSeats,setBookedSeats]=useState([2,5,4])
    
    function seatsBooking(id){
      if (!bookedSeats.includes(id)) {
        console.log("ADDED");
        // bookedSeats.push(id)
        setBookedSeats([...bookedSeats,id])
        console.log(bookedSeats);
      }
    } 

    // function seatsBooking(id){
    //   if (!bookedSeats.includes(id)) {
    //     console.log("ADDED");
    //     setBookedSeats(...bookedSeats,id)
    //     console.log(bookedSeats);
    //   }
    // }


    
  return (
    <div className="seats-outer">
      <div className="col-lg-3">
        <Sidenav />
      </div> 
      <div className="seats-main-outer col-lg-9 ">
        <div className="seats-main">
        {currentScreen.map((d,idx)=>{
            return(
                <button key={idx} disabled={d.Booked}  className={bookedSeats.includes(d.id) ? "seatAdded":"seat"} onClick={()=>seatsBooking(d.id)}>{d.name} {}</button>
            )
        })}
        </div>
      </div>
    </div>
  );
}
