import React from "react";
import { useState, useEffect } from "react";
import Youtube from "react-youtube";
import { addcomment, addlike, adddislike, addview } from "./utils";
import "./Videoplayer.css";

function Videoplayer({ show, setshow }) {
  const [input, setInput] = useState("");
  const [user, setuser] = useState("abhay");
  // youtube options
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="wrapper">
      <div className="videoplayer">
        <div>
          <Youtube videoId={show.videoid} opts={opts} />
        </div>
        <button onClick={() => setshow(null)}>close</button>
      </div>

      {/*  */}
      <div className="videoinfo">
        <p>
          <button>views</button>:{show.view}
        </p>
        <p>
          <button onClick={(e) => addlike(e, show._id, show, setshow)}>
            likes
          </button>
          :{show.likes}
        </p>
        <p>
          <button onClick={(e) => adddislike(e, show._id, show, setshow)}>
            dislikes
          </button>
          :{show.dislikes}
        </p>
      </div>

      {/*  */}
      <div className="videocomments">
        <div className="comment">
          {show.comments.map((c) => (
            <div>
              {c.name} - {c.text}
            </div>
          ))}
        </div>
      </div>
      <div className="addcomment">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your comment"
          />
          <button
            onClick={(e) =>
              addcomment(e, show._id, show, setshow, input, setInput, user)
            }
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Videoplayer;
