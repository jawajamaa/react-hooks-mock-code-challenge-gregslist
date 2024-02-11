import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  const [isFav, setIsFav] = useState(false);

  console.log(listings);

  function onHandleFav(event) {
    console.log(event);
    setIsFav(!isFav)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => (
          <ListingCard 
          key = { listing.id }
          listing = { listing }
          isFav = { isFav }
          setIsFav = { onHandleFav }
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
