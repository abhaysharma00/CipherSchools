import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <b> MoonPlayer</b>
      </div>
      <div className="right ">
        <ul className=" navbar">
          <button className="items ">Home</button>
          <button className="items ">Trending</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
