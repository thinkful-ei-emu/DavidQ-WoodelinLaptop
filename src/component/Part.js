import React from 'react';
import Item from './Item';
export default function Part(props){
  /* Part key={index} id={index} name={item.type} parts = {props.features[item.type] */
    let items = props.parts.map((item,index)=>{
      return (<Item key={index} id={index} name = {item.name} cost={item.cost}/> );

    });
  return (<div>
    {items}
  </div>);
}