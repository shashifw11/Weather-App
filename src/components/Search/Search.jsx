import {useState , useEffect} from "react" ; 
import { Input } from '@chakra-ui/react'
import axios from "axios" ; 
import { Search2Icon} from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import "./search.css" ; 


export const Search = ({handleChange}) =>{

   const [text , setText] = useState("") ; 
   const [search_data , setSearch_data] = useState([]) ; 
   const [loading , setLoading] =  useState(false) ; 
  
      console.log(search_data) 
    
    // let key = "XrybJhqBNzAmp7PzoIiWmMxhhy3Du6Ky"
     // http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${text} 
     // http://dataservice.accuweather.com/locations/v1/search  

     // search by text
     //https://api.weatherapi.com/v1/search.json?key=${key}&q=${text}
     // eef88abb5e1146f4adc133415222409

     // search by city
     //http://dataservice.accuweather.com/locations/v1/cities/search

  //http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}


  const searchData = async ()=>{
        try{ 
      const key = "6e1d2dbf1530ff10a9e01675f07f8f53" ; 
      const limit = 10 ; 
       if(text.length !== 0 && text !== ""  && text !== " "){
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?appid=${key}&q=${text}&limit=${limit}`)
        const data = await res.json() ;  
           setSearch_data(data) 
       }
       }catch(err){
            console.log("err", err); 
          }
      }


 const getData = async ()=>{
     const search_data = await searchData() ;  

       if(search_data === undefined){
           return false
       }else{
           search_data.forEach(function(item){
               return setSearch_data(item)
           })
       }
      // search_data?.search_data.forEach(function(item){
      //             return setSearch_data(item)})
   }    

   const Debounce=(fn,d)=>{
       let timer ; 
    return function (){
         let context= this ; 
          let args = arguments ; 
        clearTimeout(timer) ; 
            timer =   setTimeout(()=>{
               getData.apply(context,arguments);
             } , d)
         }
    } 

    const SerachBar = Debounce(getData,400) ; 


    const handleValue = (item)=>{
          setText("") ;    //item.name
          setSearch_data([]); 
           handleChange(item) ; 
      }

   return <div  className = "input-container" >
      <div className = "input-inner-container" >
    
      <Input   
       value = {text}
       className="input"
      type = "search"  
      onKeyUp={SerachBar}  
      onChange = {(e)=>setText(e.target.value)} 
      placeholder="Search" / >
       {/* <Search2Icon  w={7} h={6}  /> */}
      </div >

    <div style = {{textAlign : "left"}}>
      {search_data.map((item,i)=>(
           <Box onClick = {()=>handleValue(item)}  
              className = "search-box"
               key = {i}>
              <p style = {{display : "flex"}}>
                <p style = {{fontWeight : "lighter"}}>{item.name}</p> , 
                <p style = {{fontWeight : "lighter"}}>{item.state}</p> , 
                <p>{item.country}</p>
              </p>
            </Box>
         ))}
      </div>
    </div>
}