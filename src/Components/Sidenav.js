import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidenav() {
    const navigate = useNavigate();
    const location=useLocation()
    const name = localStorage.getItem("name");
    
  return (
    <div className="side-nav" style={{minHeight:"100vh"}}>
      <div className="navss">
        <h5 style={{ fontWeight: "700" }}>Hi, {name} </h5>
        <button
          className={location.pathname==="/account"?"navss-btns":"navss-btns-da"}
          style={{ borderRadius: "0px" }}
          onClick={() => navigate("/account")}
        >
          Account
        </button>
        <button className={location.pathname==="/timings"?"navss-btns":"navss-btns-da"} style={{ borderRadius: "0px" }}  onClick={() => navigate("/timings")}>
          Timing
        </button>
        <button className={location.pathname==="/seats"?"navss-btns":"navss-btns-da"} style={{ borderRadius: "0px" }}  onClick={() => navigate("/seats")}>
          Seats
        </button>
      </div>
    </div>
  );
}
