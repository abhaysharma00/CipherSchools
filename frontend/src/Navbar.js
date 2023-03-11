import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <b> Videoplayer</b>
      </div>
      <div className="right ">
        <ul className=" navbar">
          <button className="items ">Home</button>
          <button className="items ">Trending</button>
          {/* <button className="items button2">Tv Shows</button>
          <button className="items button2">New & Popular</button> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <img
  className="logo"
  src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"
  alt="netflix logo"
/> */
}
