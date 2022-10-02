import React from 'react'
import {useState , useEffect} from "react"
import moment from "moment" ; 
import { Search } from '../Search/Search'
import axios from "axios" ; 
import { Box , Img } from '@chakra-ui/react'
import "./home.css" ; 
import Card from './card';

const Home = () => {

    const [cloud , setCloud] = useState([]) ; 
    const [city , setCity] = useState("")
    const [lat , setLat] = useState("") ; 
    const [lon , setLon] = useState("") ; 
    const [country , setCountry] = useState("")
    const [region , setRegion] = useState("")

    const [temp , setTemp] = useState("")  ; 
    const [presure , setPresure] = useState("") ; 
    const [humidity , sethumidity] = useState("") ;
    const [sunrise, setSunrise] = useState("") ; 
    const [sunset, setSunset] = useState("") ; 
    const [icon , setIcon]  = useState("") ; 
    const [sky , setSky] = useState("")

    const [current , setCurrent] = useState({});
    const [daily , setDaily] = useState([]) ; 
    const [hourly , setHourly] = useState([]) ; 
         
    //  console.log(city , lat , lon , region , country )
     console.log("cloud" , cloud) ; 
   //console.log(current, icon, temp ,sky ,  presure , humidity , sunrise , sunset , daily , hourly ) ;  
          
const handleChange = (item)=>{ 
      setCity(item.name) ;
      setLat(item.lat) ; 
      setLon(item.lon) ; 
      setCountry(item.country) ; 
      setRegion(item.region) ;  
      getData({lati : item.lat , long: item.lon}); 
  }
  

  useEffect(()=>{
    getLocation() ; 
 },[])

 const key = "6e1d2dbf1530ff10a9e01675f07f8f53" 

function  getLocation(city){ 
    navigator.geolocation.getCurrentPosition(getLatLon)  
 async function getLatLon(city){
     let {latitude , longitude} = city.coords   
      // console.log(latitude , longitude)  
       const res = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=monthly,minutely&appid=${key}&units=metric`)
      const data = res.data ;
          setCloud(data);
          setCurrent(data.current);
         setTemp(data.current.temp) ; 
         setPresure(data.current.pressure) ; 
         sethumidity(data.current.humidity) ; 
         setSunrise(data.current.sunrise) ; 
         setSunset(data.current.sunset) ; 
        setIcon(data.current.weather[0].icon)
         setDaily(data.daily) ; 
         setHourly(data.hourly) ; 
         setSky(data.current.weather[0].description) 
          
        }
    }
async function getData({lati , long}){    
    const res = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&exclude=monthly,minutely&appid=${key}&units=metric`)
    const data = res.data ;
    setCloud(data)
    setCurrent(data.current);
    setTemp(data.current.temp) ; 
    setPresure(data.current.pressure) ; 
    sethumidity(data.current.humidity) ; 
    setSunrise(data.current.sunrise) ; 
    setSunset(data.current.sunset) ; 
    setDaily(data.daily) ; 
    setHourly(data.hourly) ; 
    setIcon(data.current.weather[0].icon)
    setSky(data.current.weather[0].description)
  }
  return (
    <div  className = "container">
      <Search  handleChange = {handleChange} /> 
    <Box className = "card-container">
      {daily.slice(0,6).map((item,i)=> <Card key = {i} item = {item}/>)}
    </Box>
      <div className = "main-box">
      <Box  className = "Temp-box">
        <p className = "date-format">{ city == "" ?cloud.timezone : city} , {moment().format('MMMM Do YYYY , h:mm a')}</p>
       <Box className = "Upper-Temp-box"> 
         <p> {temp}°C </p>
         <p className = "Temp-img" style = {{marginTop : "-15px"}}><Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} /></p>
         <p className = "sky-item">{sky}</p>
       </Box>
         <Box className = "day-Temp-box"></Box>                              
         <Box className = "current-Temp-box">
         <Box className = "inside-current-box" >
            <p className = "p-tag" >Pressure</p>
            <p className = "p-tag2">{presure}hPa</p>
         </Box>
         <Box  className = "inside-current-box">
         <p className = "p-tag">Humidity</p>
         <p className = "p-tag2">{humidity}%</p>
         </Box>
         </Box>
         <Box className = "current-Temp-box2">
         <Box className = "inside-current-box2">
            <p className = "p-tag">Sunrise</p>
            <p className = "p-tag2">{moment(sunrise*1000).format('HH:mm a')}</p>
         </Box>
         <Box className = "inside-current-box2" >
         <p className = "p-tag">Sunset</p>
           <p className = "p-tag2">{moment(sunset*1000).format('HH:mm a')}</p> 
         </Box>
         </Box>
    </Box>
       </div>
     
    </div>
  )
}

export default Home
