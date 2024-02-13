import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const baseUrl = "http://localhost:6001/listings/";

  useEffect(() => {
    fetch(baseUrl)
    .then((r) => r.json())
    .then(listings => setListings(listings))
  }, [])

  function onHandleSubmit() {
    setSearchInput(() => searchInput);
  }

  function onHandleChecked() {
console.log(isChecked)
  }

  return (
    <div className="app">
      <Header
        listings = { listings }
        setListings = { setListings }
        searchInput = { searchInput }
        setSearchInput = { setSearchInput } 
        onHandleSubmit = { onHandleSubmit } 
        isChecked = { isChecked }
        setIsChecked = { setIsChecked }
        onHandleChecked = { onHandleChecked }    
      />
      <ListingsContainer 
        baseUrl = { baseUrl }
        listings = { listings }
        setListings = { setListings }
        searchInput = { searchInput }
        isChecked = { isChecked }     
      />
    </div>
  );
}

export default App;
