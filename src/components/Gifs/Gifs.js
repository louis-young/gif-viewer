import React from "react";

import Gif from "../Gif/Gif";

const Gifs = ({ gifs }) => {
  return (
    <ul>
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </ul>
  );
};

export default Gifs;
