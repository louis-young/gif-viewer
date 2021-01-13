import React from "react";

import Gif from "../Gif/Gif";

import "./Gifs.scss";

const Gifs = ({ gifs, loading, error }) => {
  if (error) {
    return <p>Error.</p>;
  }

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
      {loading && <p>Loading more...</p>}
    </>
  );
};

export default Gifs;
