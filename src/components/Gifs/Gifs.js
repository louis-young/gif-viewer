import React from "react";

import Gif from "../Gif/Gif";

import "./Gifs.scss";

const Gifs = ({ gifs, getMoreGifs }) => {
  if (!gifs) {
    return <p>No gifs.</p>;
  }

  return (
    <>
      <ul className="container gifs">
        {gifs.map((gif) => (
          <Gif key={gif.id} gif={gif} />
        ))}
      </ul>
      <button className="button button--center button--spaced" onClick={getMoreGifs}>
        Load more
      </button>
    </>
  );
};

export default Gifs;
