import React from "react";

function Row({ homedata, setshow }) {
  return (
    <>
      <h2>Title</h2>
      <div className="row_poster">
        {homedata.map((val) => (
          <img
            onClick={(e) => {
              setshow(val);
            }}
            className="imageresizing"
            src={val.videourl}
          />
        ))}
      </div>
    </>
  );
}

export default Row;
