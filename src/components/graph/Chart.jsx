import React from 'react'
import {Bar , Line} from "react-chartjs-2" ; 
import Chart from 'chart.js/auto';
import {useState} from "react" ; 
import moment from "moment" ;


const LineChart = ({hourly}) => { 
      
     const time = [] ; 
     const temp = []  ;

  hourly.slice(0,12).forEach((item)=>{
    temp.push(Math.ceil(item.temp)) ; 
    time.push(moment(item.dt*1000).format('hh')) 
  }) 

    //  console.log(labels) ; 
    //   console.log(data) ; 
  

  return (
    <div  style = {{width : "100%" , height : "130px" }}>
       <Line 
      data = {{
        labels : time,
        datasets : [{ 
          label : "weather" ,
          // fill : false ,  
            data : temp , 
           backgroundColor : "tomato" , 

        }]
      }} 

      options = {{
        scales: {
          yAxes: {
              ticks: {
                  // Include a dollar sign in the ticks
                  callback: function(value, index, ticks) {
                      return  value + "°";
                  }
              }
          }  
        }
      }}
     />
    </div>
  )
}

export default LineChart
