import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import VideoBlock from "./VideoBlock";
function App() {
  const [homedata, sethomedata] = useState([]);
  useEffect(() => {
    const fetchvideos = async () => {
      try {
        const response = await fetch("http://localhost:8000/app/fetchvideos");
        const data = await response.json();
        console.log(data);
        sethomedata(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchvideos();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="videblock">
        {homedata?.map((data) => (
          <VideoBlock url={data.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
