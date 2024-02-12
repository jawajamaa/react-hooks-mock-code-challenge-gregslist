import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ baseUrl, listings, setListings }) {


  console.log(listings);

  function onHandleDeleteItem(id) {
    const updateListings = listings.filter(listing => (
      listing.id !== id));
      setListings(updateListings);
  } 

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard 
          baseUrl = { baseUrl }
          key = { listing.id }
          // listing = { listing } next line makes it possible to loose ln 4 in ListingCard
          { ...listing }
          onHandleDeleteItem = { onHandleDeleteItem }
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
