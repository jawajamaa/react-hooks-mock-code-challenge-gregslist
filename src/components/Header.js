import React from "react";
import Search from "./Search";

function Header({ searchInput, setSearchInput, onHandleSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
      searchInput = { searchInput } 
      setSearchInput = { setSearchInput }
      onHandleSubmit = { onHandleSubmit }
      />
    </header>
  );
}

export default Header;
