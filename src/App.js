import React, { useState } from "react";

import initialGifs from "./data/trending.json";

import blue from "./assets/placeholders/blue.jpg";
import green from "./assets/placeholders/green.jpg";
import orange from "./assets/placeholders/orange.jpg";
import purple from "./assets/placeholders/purple.jpg";
import yellow from "./assets/placeholders/yellow.jpg";

import "./stylesheet.css";

const placeholders = [blue, green, orange, purple, yellow];

const getRandomPlaceholder = () => {
  const index = Math.floor(Math.random() * placeholders.length);

  const placeholder = placeholders[index];

  return placeholder;
};

const App = () => {
  const [gifs, setGifs] = useState(initialGifs);

  const showGif = (event) => {
    const image = event.target;

    const gif = image.dataset.gif;

    image.src = gif;
  };

  return (
    <>
      {/* <pre>{JSON.stringify(gifs, false, 2)}</pre> */}
      <ul>
        {gifs.data.map((gif) => {
          return (
            <li key={gif.id}>
              <img
                src={getRandomPlaceholder()}
                style={{ height: `${gif.images.downsized.height}px` }}
                data-gif={gif.images.downsized.url}
                alt={gif.title}
                loading="lazy"
                onLoad={showGif}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
