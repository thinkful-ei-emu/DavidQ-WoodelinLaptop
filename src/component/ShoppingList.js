import React from 'react';
import Part from './Part';
import Item from './Item';

function ShoppingList(props){
    
    var parts = [];

    

    for (let [key, value] of Object.entries(props.features)){
        parts.push({type:key, name:value.name, cost:value.cost});
    }
    parts = parts.map((item,index)=>{
      return <Part key={index} id={index} name={item.type} parts = {props.features[item.type]} selected = {props.selected} handleUpdate = {props.handleUpdate}/>
    });

    return(
     <section className="main__form feature"> 
       <h2>TECH SPECS AND CUSTOMIZATIONS</h2> 
       <ul className="feature__list">        
       {parts}
       </ul>
     </section>   
    )
}



export default ShoppingList;