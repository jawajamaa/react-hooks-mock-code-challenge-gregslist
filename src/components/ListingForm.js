import React, { useState } from "react";


function ListingForm({
    baseUrl, 
    onFormSubmit,  
}) {
    const [formData, setFormData] = useState({
        description:"",
        image:"",
        location:""
      })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "description": formData.description,
                "image": formData.image,
                "location": formData.location,
            })
        })
        .then((r) => r.json())
        .then((data)=> onFormSubmit(data))
    }

    return(
        <div>
            <form id = "new-item-form" onSubmit = { handleSubmit } >
                <span>
                    <label>Item Description </label>
                    <input 
                    type = "text"
                    name = "description"
                    placeholder = "description"
                    value = { formData.description }
                    onChange = { handleChange }
                    >
                    </input>
                </span>
                <span>
                    <label>Item Image URL </label>
                    <input
                    type = "text"
                    name = "image"
                    placeholder = "image URL"
                    value = { formData.image }
                    onChange = { handleChange }
                    >
                    </input>
                </span>  
                <span> 
                <label>Location of Item </label>
                    <input
                    type = "text"
                    name = "location"
                    placeholder = "location"
                    value = { formData.location }
                    onChange = { handleChange }
                    >
                    </input>
                </span>
                <button>Submit New Item</button> 
            </form>       
        </div>
    )
}

export default ListingForm;