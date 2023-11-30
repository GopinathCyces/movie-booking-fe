import React, { useEffect, useState } from "react"; 
import Sidenav from "./Sidenav";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [timing, setTiming] = useState("");
  const  navigate=useNavigate()
  console.log(timing);
  localStorage.setItem("timing",timing)
  

  async function toSeats(time){
    await setTiming(time)
    navigate("/seats")
  }
  return (
    <div className="Booking-outer">
      <div className="col-lg-3" >
        <Sidenav />
      </div>

      <div className="main-space col-lg-9">
        <div className="timings">
          <button className="time-btn" onClick={() => toSeats("9.00 AM") }>
            9.00 AM
          </button>
          <button className="time-btn" onClick={() => toSeats("10.15 AM")}>
            10.15 AM
          </button>
          <button className="time-btn" onClick={() => toSeats("11.00 AM")}>
            11.00 AM
          </button>
          <button className="time-btn" onClick={() => toSeats("2.30 PM")}>
            2.30 PM
          </button>
          <button className="time-btn" onClick={() => toSeats("4.00 PM")}>
            4.00 PM
          </button>
          <button className="time-btn" onClick={() => toSeats("5.30 PM")}>
            5.30 PM
          </button>
          <button className="time-btn" onClick={() => toSeats("7.45 PM")}>
            7.45 PM
          </button>
          <button className="time-btn" onClick={() => toSeats("10.30 PM")}>
            10.30 PM
          </button>
        </div>
      </div>
    </div>
  );
}
