import React from 'react'
import {Box , Img} from '@chakra-ui/react'
import moment from "moment" ; 
import "./card.css" ; 
import {useState} from "react" ; 
const Card = ({item}) => {
    const[day , setDat] = useState("") ; 

      // console.log(item) ; 
      var date = new Date() ; 
      var days = date.getDay() ;  
    
  return (
   <Box className = "card-box">
    <p>{moment(item.dt*1000).format('ddd')}</p>
     <p>{item.temp.day}°C</p>
     <p><Img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /></p>
     <p>{item.weather[0].main}</p>
   </Box>
  )
}

export default Card
