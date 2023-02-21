import React, { useState, useEffect } from "react";

import CountryCard from "../CountryCard";

export default function AllCountries() {
  const [countries, setCountries] = useState([]);
  // fetch all countries on page load (what hook should you use for that?) then save the received array of countries in a local state (call it countries)
useEffect(()=>{
  fetch("https://restcountries.com/v2/all")
  .then((response)=> response.json())
  .then ((data)=>setCountries(data))
},[]);
  return (
    <div className="cardsContainer">


     {countries.map((i)=> <CountryCard country={i}/>)}
     
    
     
    </div>
  );
}
