import React from 'react'
import {useState , useEffect} from "react"
import { Search } from '../Search/Search'
import axios from "axios" ; 
import { Box } from '@chakra-ui/react'

const Home = () => {
    const [city , setCity] = useState("")
    const [cloud , setCloud] = useState([]) ; 
   
      console.log(city) ; 
    console.log(cloud.sys) ; 

    
     
    const handleChange = (item)=>{
        setCity(item) ; 
    }
   
    useEffect(()=>{
        // getData() ; 
         console.log("kumar")
      }, [city])
    

   const key = "6e1d2dbf1530ff10a9e01675f07f8f53" 

  //  async function getData(){
  //     const res =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  //     const data = res 
  //         setCloud(data.data)
  //       console.log("shashi")
  //   }

  

  return (
    <div style = {{ width : "430px" , height : "650px" , margin : "auto" , marginTop : "50px"  ,  borderRadius : "15px" , border : "2px solid white" , boxShadow : "rgba(0, 0, 0, 0.15) 0px 2px 8px"}}>
      <Search  handleChange = {handleChange}/> 
      {city === "" ? <div>Please Enter Your Location</div> :   <div  style = {{width : "400px" , margin : "auto"  , marginTop : "40px" }}>
       <Box 
         boxShadow ="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
         w='100%' p={4}  borderRadius = {20}  h = {500}>
         <Box display = "flex" w='90%' margin = "auto" textAlign = "left" p = {3} fontSize = "40px" fontWeight = "bolder" h = {20}>{Math.round(cloud.main.temp-270)}°C <img  style = {{ width : "20%"}} src = "https://as2.ftcdn.net/v2/jpg/01/14/24/43/1000_F_114244324_HkVNU7BbaqHalaOfSUM4DjvwGygDEMRL.jpg"/></Box>
         <Box w='90%' margin = "auto"  h = {36}></Box>
         <Box display='flex' justifyContent="space-around">
         <Box w = "42%" h = {14} mt = {5} p = {1} bg = "#f5faff" >
            <p style = {{textAlign : "left" , fontWeight : "bolder"}}>Pressure</p>
            <p style = {{textAlign : "left" , fontWeight : "lighter"}}>{cloud.main.pressure} hpa</p>
         </Box>
         <Box w = "42%" h = {14} mt = {5} p = {1} bg = "#f5faff" >
         <p style = {{textAlign : "left" ,  fontWeight : "bolder" }}>Humidity</p>
         <p style = {{ textAlign : "left",  fontWeight : "lighter"}}>{cloud.main.humidity} %</p>
         </Box>
         </Box>
         <Box display='flex' justifyContent="space-between">
         <Box w = "30%" h = {14} mt = {5} p = {2}  >
            <p style = {{textAlign : "left" , fontWeight : "bolder"}}>Sunrise</p>
            <p style = {{textAlign : "left"}}>{Math.round(cloud.sys.sunrise/86400000)-12}AM</p>
         </Box>
         <Box w = "30%" h = {14} mt = {5} p = {2}  >
         <p style = {{textAlign : "right" , fontWeight : "bolder"}}>Sunset</p>
         <p style = {{textAlign : "right"}}>{Math.round(cloud.sys.sunset/86400000)-12}PM</p>
         </Box>
         </Box>
    </Box>
       </div>}
    </div>
  )
}

export default Home
