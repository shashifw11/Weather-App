import {useState , useEffect} from "react" ; 
import {Link} from "react-router-dom" ; 
import { Input } from '@chakra-ui/react'
import axios from "axios" ; 
import { Search2Icon} from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
// import {Select} from '@chakra-ui/react'

export const Search = ({handleChange}) =>{

   const Id = useParams() ; 

   const [text , setText] = useState("") ; 
   const [search_data , setSearch_data] = useState([]) ; 
   const [loading , setLoading] =  useState(false) ; 
  
      console.log(search_data) 
    
     
  const searchData = async ()=>{
        try{ 
           setLoading(true)
          axios.get(`http://localhost:8080/data?q=${text}`).then((data)=>{
                 return  setSearch_data(data.data)
            })
               }catch(err){
                  console.log("err", err); 
              }
              setLoading(false)
           }


 const getData = async ()=>{
      search_data = await searchData() ; 
       // if(search_data === undefined){
       //     return false
       // }else{
       //     search_data.forEach(function(item){
       //         return setSearch_data(item)
       //     })
       // }
      search_data?.search_data.forEach(function(item){
                  return setSearch_data(item)})
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
          setText(item) ; 
          setSearch_data([]);
           handleChange(item)
    }

   return <div style = {{width : "400px"  ,  margin : "auto" , marginTop : "30px" }}>
      <div style = {{display : "flex"}}>
    
      <Input   
       value = {text}
      padding = "30px" 
      type = "search"  
      onKeyUp={SerachBar}  
      onChange = {(e)=>setText(e.target.value)} 
      placeholder="Search"/>
       {/* <Search2Icon  w={7} h={6}  /> */}
      </div >
    <div style = {{textAlign : "left"}}>
      {search_data.map((item,i)=> loading ? ("LOADING..."): (
      //  <Link to = {`${item.id}`}>
         <Box onClick = {()=>handleValue(item.city)} 
                cursor = "pointer"
               borderRadius='lg' mt='2' 
              fontWeight='semibold' h= {20}  
              boxShadow = "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"  
              lineHeight='20px' letterSpacing='wide'  fontSize='xl' bg='white' 
              w='100%' p={8} color='black' key = {i}
              ><p style = {{display : "flex"}}><p style = {{fontWeight : "lighter"}}>{item.city} , </p><p>{item.state}</p></p></Box>
      // </Link>
      ))}
      </div>
    </div>
}