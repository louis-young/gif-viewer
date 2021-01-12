import React, { useState } from "react";

import Gifs from "./components/Gifs/Gifs";

import initialGifs from "./data/trending.json";

import "./stylesheets/main.scss";

const App = () => {
  const [gifs, setGifs] = useState(initialGifs);

  return <Gifs gifs={gifs.data} />;
};

export default App;
