import React from 'react'
import {Box , Img} from '@chakra-ui/react'
import "./card.css" ; 

const Card = ({item}) => {
      console.log(item) ; 
  return (
   <Box className = "card-box">
     <p>{item.temp.day}°C</p>
     <p><Img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} /></p>
     <p>{item.weather[0].main}</p>
   </Box>
  )
}

export default Card
