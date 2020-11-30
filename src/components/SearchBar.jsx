import React, { useState } from "react";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      props.searchedQuery(query);
      setQuery("");
    }
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleChange} placeholder="Search" className="searchbar__input" value={query || ""} />
      </form>
    </div>
  );
}

export default SearchBar;
