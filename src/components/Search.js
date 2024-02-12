import React from "react";

function Search({ searchInput, setSearchInput, onHandleSubmit }) {

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    onHandleSubmit(() => searchInput);
  }

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={ searchInput }
        // onChange={(e) => console.log(e.target.value)}
        onChange={ handleChange }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
