import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Row from "./Row";
import Videoplayer from "./Videoplayer";
//
function App() {
  const [homedata, sethomedata] = useState([]);
  const [show, setshow] = useState(null);

  // fetch homepage
  useEffect(() => {
    const fetchvideos = async () => {
      try {
        const response = await fetch("http://localhost:8000/app/fetchvideos");
        const data = await response.json();
        sethomedata(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchvideos();
  }, []);

  //

  return (
    <div className="outerbox">
      <div className="app">
        <Navbar />
        <div className="mid">
          {show && <Videoplayer show={show} setshow={setshow} />}
        </div>
        <Row homedata={homedata} setshow={setshow} />
      </div>
    </div>
  );
}

export default App;
