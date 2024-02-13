import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  const [listings, setListings] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    description:"",
    image:"",
    location:""
  })
// for a controlled form, formData should live in ListingForm, and the reference
// can be passed up to App to update. by state living here, it makes the App very expensive, causing a re-render each time anything is entered into input

  const baseUrl = "http://localhost:6001/listings/";

  useEffect(() => {
    fetch(baseUrl)
    .then((r) => r.json())
    .then(listings => setListings(listings))
  }, [])

  function onHandleSubmit() {
    setSearchInput(() => searchInput);
  }

  function onFormSubmit() {
    setListings([...listings,
      formData])
  }

  return (
    <div className="app">
      <Header
        listings = { listings }
        setListings = { setListings }
        searchInput = { searchInput }
        setSearchInput = { setSearchInput } 
        onHandleSubmit = { onHandleSubmit } 
        isChecked = { isChecked }
        setIsChecked = { setIsChecked }  
      />
      <ListingForm
        baseUrl = { baseUrl }
        formData = { formData }
        setFormData = { setFormData }
        onFormSubmit =  { onFormSubmit }
      />
      <ListingsContainer 
        baseUrl = { baseUrl }
        listings = { listings }
        setListings = { setListings }
        searchInput = { searchInput }
        isChecked = { isChecked }     
      />
    </div>
  );
}

export default App;
