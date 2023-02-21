import "./App.css";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header";
import NotFound from "./components/views/NotFound";
import { Route,Routes } from "react-router-dom";

import CountryCard from "./components/CountryCard";


function App() {

  return (
    <>
    <div className="App">
{/* show the Header component, then add the routes to the pages components*/}
<Header/>
<CountryCard/>

   App component
   </div>
   <Routes>

   <Route path="/" element={<AllCountries/>}/>
   <Route path="/byName" element={<ByName/>}/>
   <Route path="/byRegion" element={<ByRegion/>}/>
   <Route path="*" element={<NotFound/>}/>



   </Routes>
   

    </>



  );
}

export default App;
