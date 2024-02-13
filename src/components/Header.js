import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({ 
  searchInput, 
  setSearchInput, 
  onHandleSubmit, 
  isChecked,
  setIsChecked,
  onHandleChecked 
}) {

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
      <Sort
        isChecked = { isChecked }
        setIsChecked = { setIsChecked }
      onHandleChecked = { onHandleChecked }
      />
    </header>
  );
}

export default Header;
