import React from "react";

import Gif from "../Gif/Gif";

import "./Gifs.scss";

const Gifs = ({ gifs }) => {
  return (
    <ul className="container gifs">
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </ul>
  );
};

export default Gifs;
