import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Playcard from "./Playcard";
import Youtube from "react-youtube";

//
function App() {
  const [homedata, sethomedata] = useState([]);
  const [show, setshow] = useState(null);
  const [input, setInput] = useState("");
  const [user, setuser] = useState("abhay");
  // fetch
  useEffect(() => {
    const fetchvideos = async () => {
      try {
        const response = await fetch("http://localhost:8000/app/fetchvideos");
        const data = await response.json();
        sethomedata(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchvideos();
  }, []);

  // toggling
  const toggle = (val) => {
    console.log("====", val);

    if (!show) {
      setshow(val);
    } else {
      setshow(null);
    }
  };

  // adding comment
  const addcomment = async (e, id) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/app/addcomment?id=${id}`,
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          name: user,
          text: input,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    show.comments.push({
      name: user,
      text: input,
    });
    setInput("");
  };

  // addlike

  const addlike = async (e, id) => {
    const likes = show.likes;
    // likes;
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/app/addcomment?id=${id}`,
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          like: 1 + likes,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    show.likes = likes;
    setInput("");
  };
  const opts = {
    height: "390",
    width: "640",
  };
  return (
    <div className="app">
      <Navbar />
      {show ? (
        <>
          <div className="videoplayer">
            <Youtube videoId={show.videoid} opts={opts} />
          </div>
          <div className="videoinfo">
            <p>views:{show.view}</p>
            <p>likes:{show.likes}</p>
            <p>dislikes:{show.dislikes}</p>
          </div>
          <div className="videocomments">
            {show.comments.map((c) => (
              <>
                <p>
                  user : {c.name} <br />
                  comment: {c.text}
                </p>
              </>
            ))}
          </div>
          <div className="addcomment">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="   enter you reply"
              />
              <button onClick={(e) => addcomment(e, show._id)} type="submit">
                Send message
              </button>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="container">
        {homedata.map((val) => (
          <div className="box" onClick={() => toggle(val)}>
            <Playcard url={val.videourl} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
