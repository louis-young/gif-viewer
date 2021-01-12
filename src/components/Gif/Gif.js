import React from "react";

import blue from "../../assets/placeholders/blue.jpg";
import green from "../../assets/placeholders/green.jpg";
import orange from "../../assets/placeholders/orange.jpg";
import purple from "../../assets/placeholders/purple.jpg";
import yellow from "../../assets/placeholders/yellow.jpg";

const placeholders = [blue, green, orange, purple, yellow];

const getRandomPlaceholder = () => {
  const index = Math.floor(Math.random() * placeholders.length);

  const placeholder = placeholders[index];

  return placeholder;
};

const Gif = ({ gif }) => {
  const showGif = (event) => {
    const image = event.target;

    const gif = image.dataset.gif;

    image.src = gif;
  };

  const placeholder = getRandomPlaceholder();

  return (
    <li>
      <img
        src={placeholder}
        style={{ height: `${gif.images.downsized.height}px` }}
        data-gif={gif.images.downsized.url}
        alt={gif.title}
        onLoad={showGif}
      />
    </li>
  );
};

export default Gif;
