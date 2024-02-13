import React from "react";


function ListingForm() {



    return(
        <div>
            <span>
                <label>Item Description </label>
                <input 
                type = "text"
                placeholder = "description">
                </input>
            </span>
            <span>
                <label>Item Image URL </label>
                <input
                type = "text"
                placeholder = "image URL"
                >
                </input>
            </span>  
            <span> 
            <label>Location of Item </label>
                <input
                type = "text"
                placeholder = "location"
                >
                </input>
            </span>    
        </div>
    )
}

export default ListingForm;