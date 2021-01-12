import React, { useState } from "react";

import "./Search.scss";

const Search = ({ setUsername, loading }) => {
  const [value, setValue] = useState("");

  const searchUser = (event) => {
    event.preventDefault();

    setUsername(value);

    setValue("");
  };

  return (
    <section className="container">
      <form onSubmit={searchUser} className="search">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search for a gif..."
          autoFocus
          required
          className="search__input"
        />
        <button type="submit" disabled={loading} className="search__submit button">
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
