import React from "react";

function Sort({ isChecked, setIsChecked }) {

    function handleCheck(event) {
        setIsChecked(event.target.checked);
    }

    return (
        <>
        <label>Check here to sort alphabetically</label>
        <input 
            type = "checkbox" 
            id = "checkbox" 
            checked = { isChecked }
            onChange = { handleCheck } 
        >
        </input>
        </>
    )
}

export default Sort;