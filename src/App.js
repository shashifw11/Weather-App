import logo from './logo.svg';
import './App.css';
import { Search } from './components/Search/Search';
import {Route , Routes} from "react-router-dom"
import Home from './components/display/home';
import {useState , useEffect} from "react" 
import axios from 'axios';
import React from "react" ; 

function App() {

// const [city , setCity] = useState("usa") ;
// const [data , setData] = useState([]) ;  
//   console.log(data) ; 

  
//  const key = "6e1d2dbf1530ff10a9e01675f07f8f53"   // default
//  //const key = "649add99e83a5e18fece68ef51cc1321"   // forcast key


// function handleChange (city){ 
//    navigator.geolocation.getCurrentPosition(getLatLon)  

//    function getLatLon(city){
//     let {latitude , longitude} = city.coords   
//       console.log(latitude , longitude)  

//      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${28.57}&lon=${77.1}&exclude=monthly&appid=${key}&&units=metric`)
//         .then((res)=>res.json()).then(data => console.log(data)); 
//    }
  
// }

// navigator.geolocation.getCurrentPosition(getLatLon);

// function getLatLon(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;
//     console.log("Latitude is "+latitude);
//     console.log("Longitude is "+longitude);
// }

// https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric
 

  return (
    <div className="App">
       <Routes>
        <Route path = "/" element = { <Home/>}/>
       
     </Routes> 

     {/* <input  style = {{border : "1px solid black"}} type = "text" placeholder = "Enter City"/>
     <button  style = {{border : "1px solid black"}} onClick = {handleChange}>Search</button>  
     */}
    </div>
  );
}

export default App;
