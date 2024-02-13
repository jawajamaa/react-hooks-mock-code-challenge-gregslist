import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ 
  baseUrl, 
  listings, 
  setListings, 
  searchInput,
  isChecked 
}) {

  function onHandleDeleteItem(id) {
    const updateListings = listings.filter(listing => (
      listing.id !== id));
      setListings(updateListings);
  } 


  const searchReturnListings = listings
    .filter(listing => listing.description.includes(searchInput));
    if (isChecked) {
       searchReturnListings.sort((a,b) => {
        a = a.location.toLowerCase();
        b = b.location.toLowerCase();
        if (a < b) {
          return -1
        }
        if (a > b) {
          return 1
        }
        return 0
      })
    } 
      

  return (
    <main>
      <ul className="cards">
        {searchReturnListings.map(listing => (
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
