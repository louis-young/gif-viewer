import React, { useState, useEffect } from "react";

import Gifs from "./components/Gifs/Gifs";
import Search from "./components/Search/Search";

import "./stylesheets/main.scss";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [gifs, setGifs] = useState({});

  const getMoreGifs = async () => {
    try {
      setLoading(true);

      const LIMIT = 15;

      const offset = (gifs.pagination.offset += LIMIT) || 0;

      const url = `${process.env.REACT_APP_API_BASE_URL}/v1/gifs/trending?offset=${offset}&limit=${LIMIT}&api_key=${process.env.REACT_APP_API_KEY}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error();
      }

      const newGifs = await response.json();

      setGifs((gifs) => ({ data: [...gifs.data, ...newGifs.data], pagination: newGifs.pagination }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getGifs = async () => {
      try {
        setLoading(true);

        const LIMIT = 15;

        const url = `${process.env.REACT_APP_API_BASE_URL}/v1/gifs/trending?limit=${LIMIT}&api_key=${process.env.REACT_APP_API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const gifs = await response.json();

        setGifs(gifs);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getGifs();
  }, []);

  return (
    <>
      <Search />
      <Gifs gifs={gifs.data} getMoreGifs={getMoreGifs} />
    </>
  );
};

export default App;
