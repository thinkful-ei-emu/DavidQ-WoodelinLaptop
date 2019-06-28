import React from 'react';
import Part from './Part';
import Item from './Item';
/* 
selected: {
  Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
  "Operating System": {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
  "Video Card":{
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
  Display: {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    } */
function ShoppingList(props){
    
    var parts = [];

    

    for (let [key, value] of Object.entries(props.features)){
        parts.push({type:key, name:value.name, cost:value.cost});
    }
    parts = parts.map((item,index)=>{
      return <Part key={index} id={index} name={item.type} parts = {props.features[item.type]}/>
    });

    return(
     <div> 
       <h2>TECH SPECS AND CUSTOMIZATIONS</h2>         
       {parts}
     </div>   
    )
}



export default ShoppingList;