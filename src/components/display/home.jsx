import React from 'react'
import {useState , useEffect} from "react"
import { Search } from '../Search/Search'
import axios from "axios" ; 
import { Box } from '@chakra-ui/react'
import "./home.css" ; 

const Home = () => {

    const [cloud , setCloud] = useState([]) ; 
    const [city , setCity] = useState("")
    const [lat , setLat] = useState("") ; 
    const [lon , setLon] = useState("") ; 
    const [country , setCountry] = useState("")
    const [region , setRegion] = useState("")

       console.log(city , lat , lon , region , country )
         console.log("cloud" , cloud.data) ; 

const handleChange = (item)=>{ 
  console.log("=========handlechange_start")
      setCity(item.name)  
      setLat(item.lat) ; 
      setLon(item.lon) ; 
      setCountry(item.country) ; 
      setRegion(item.region) ; 
      getData({lati : item.lat , long: item.lon});  
     
       console.log("=========handlechange_End")
  }
     
// const handleData = (element)=>{
//        currentData(element.current);
//        dailyData(element.daily)
//        hourlyData(element.hourly)
//   }

//   const currentData = (elem)=>{
//         console.log( "currentData" , elem)
//   }

//   const dailyData = (elem)=>{
//     console.log("daily" , elem)
//   }

//   const hourlyData = (elem)=>{
//     console.log("hourly" , elem)
//   }



   const key = "6e1d2dbf1530ff10a9e01675f07f8f53" 

function getData({lati , long}){    
    console.log("getData_start")
      axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&exclude=monthly,minutely&appid=${key}&&units=metric`)
      .then((res)=>{
        return setCloud(res) ; 
       }) 
       console.log("getData_End")
     }

  


  return (
    <div  className = "container">
      <Search  handleChange = {handleChange}/> 
      {city === "" ? <div>Please Enter Your Location</div> :   
      <div className = "main-box">
       <Box  className = "Temp-box">
         <Box className = "Upper-temp-box"> 
         {cloud.current.temp}°C 
         <img  className = "temp-image"  src = "https://as2.ftcdn.net/v2/jpg/01/14/24/43/1000_F_114244324_HkVNU7BbaqHalaOfSUM4DjvwGygDEMRL.jpg"/>
         
         </Box>
         <Box className = "day-temp-box"></Box>                              
         <Box className = "current-temp-box">
         <Box className = "inside-current-box" >
            <p className = "p-tag" >Pressure</p>
            <p className = "p-tag2">{} hpa</p>
         </Box>
         <Box  className = "inside-current-box">
         <p className = "p-tag">Humidity</p>
         <p className = "p-tag2">{} %</p>
         </Box>
         </Box>
         <Box className = "current-temp-box2">
         <Box className = "inside-current-box2">
            <p className = "p-tag">Sunrise</p>
            <p className = "p-tag2">{}AM</p>
         </Box>
         <Box className = "inside-current-box2" >
         <p className = "p-tag">Sunset</p>
           <p className = "p-tag2">{}PM</p> 
         </Box>
         </Box>
    </Box>
       </div>
        }
    </div>
  )
}

export default Home
