import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {


  console.log(listings);


  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard 
          key = { listing.id }
          // listing = { listing } next line makes it possible to loose ln 4 in ListingCard
          { ...listing }
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
