import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const baseUrl = "http://localhost:6001/listings/";

  useEffect(() => {
    fetch(baseUrl)
    .then((r) => r.json())
    .then(listings => setListings(listings))
  }, [])

  function onHandleSubmit() {
    console.log(searchInput)
    setSearchInput(() => searchInput);
  }

  return (
    <div className="app">
      <Header
        listings = { listings }
        setListings = { setListings }
        searchInput = { searchInput }
        setSearchInput = { setSearchInput } 
        onHandleSubmit = { onHandleSubmit }     
      />
      <ListingsContainer 
        baseUrl = { baseUrl }
        listings = { listings }
        setListings = { setListings }
        searchInput = { searchInput }     
      />
    </div>
  );
}

export default App;
