import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Videoplayer from "./Videoplayer";
//
function App({ user }) {
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
          {show && <Videoplayer user={user} show={show} setshow={setshow} />}
        </div>
        <div className="container">
          {homedata.map((val) => (
            // <div className="box" onClick={() => setshow(val)}>
            <img
              onClick={() => setshow(val)}
              className="imageresizing"
              src={val.videourl}
              alt=""
            />
            // </div>
          ))}
        </div>
        <div className="footer">Copyright @ MOONPLAYER</div>
      </div>
    </div>
  );
}

export default App;
