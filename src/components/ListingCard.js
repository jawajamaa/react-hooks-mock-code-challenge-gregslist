import React, { useState } from "react";

function ListingCard({ 
  baseUrl, 
  description, 
  id, 
  image, 
  location, 
  onHandleDeleteItem 
}) {

  // const { description, id, image, location } = listing;
  const [isFav, setIsFav] = useState(false);

  function handleDeleteItem() {
    console.log(id);
    fetch(baseUrl + `${id}`,{
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onHandleDeleteItem(id))
  } 

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={ description } />
      </div>
      <div className="details">
        {isFav ? (
          <button 
          className="emoji-button favorite active"
          onClick = { () => setIsFav(!isFav) }
          >★</button>
        ) : (
          <button 
          className="emoji-button favorite"
          onClick = { () => setIsFav(!isFav) }
          >☆</button>
        )}
        <strong>{ description }</strong>
        <span> · { location }</span>
        <button 
        className="emoji-button delete"
        onClick = { handleDeleteItem }
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
