import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

  const baseUrl = "http://localhost:6001/listings/";

  useEffect(() => {
    fetch(baseUrl)
    .then((r) => r.json())
    .then(listings => setListings(listings))
  }, [])


  return (
    <div className="app">
      <Header
        listings = { listings }
        setListings = { setListings }
      />
      <ListingsContainer 
        baseUrl = { baseUrl }
        listings = { listings }
        setListings = { setListings }     
      />
    </div>
  );
}

export default App;
