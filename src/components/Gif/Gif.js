import React from "react";

import { getRandomPlaceholder, showGif } from "../../utilities/utilities";

import "./Gif.scss";

const Gif = ({ gif }) => {
  const placeholder = getRandomPlaceholder();

  const height = `${gif.images.downsized.height}px`;

  return (
    <li className="gif">
      <img
        src={placeholder}
        style={{ height }}
        onLoad={showGif}
        data-gif={gif.images.downsized.url}
        alt={gif.title}
        className="gif__image"
      />
    </li>
  );
};

export default Gif;
