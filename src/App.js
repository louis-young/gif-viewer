import React, { useState } from "react";

import Gifs from "./components/Gifs/Gifs";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import Search from "./components/Search/Search";

import useGifs from "./hooks/useGifs";

import { GIFS_PER_PAGE } from "./constants/constants";

import "./stylesheets/main.scss";

const App = () => {
  const [offset, setOffset] = useState(0);

  const { loading, error, gifs } = useGifs(offset);

  const loadMore = () => {
    setOffset((offset) => offset + GIFS_PER_PAGE);
  };

  return (
    <>
      <Search />
      <InfiniteScroll loadMore={loadMore}>
        <Gifs gifs={gifs.data} loading={loading} error={error} />
      </InfiniteScroll>
    </>
  );
};

export default App;
