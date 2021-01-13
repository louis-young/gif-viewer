import { useState, useEffect } from "react";

import { fetchGifs } from "../api/api";

const useGifs = (offset) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [gifs, setGifs] = useState({});

  useEffect(() => {
    const getGifs = async () => {
      try {
        setLoading(true);

        const response = await fetchGifs(offset);

        const requestedGifs = response.data;

        if (!gifs.data) {
          setGifs(requestedGifs);

          return;
        }

        setGifs((gifs) => ({ data: [...gifs.data, ...requestedGifs.data], pagination: requestedGifs.pagination }));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getGifs();
  }, [offset]);

  return { loading, error, gifs };
};

export default useGifs;
