import React from 'react';
import Item from './Item';
export default function Part(props){
  /* Part key={index} id={index} name={item.type} parts = {props.features[item.type] */
    let items;
    if(Array.isArray(props.parts)){
    items = props.parts.map((item,index)=>{
      console.log(props.selected);
      return (<Item className="feature__selected" key={index} id={index} name = {item.name} cost={item.cost} selected= {props.selected} type={props.name}/> );

    });
  }else{
    items =(<Item className="summary_option" name = {props.parts.name} cost={props.parts.cost} selected= {props.selected} type={props.name}/> );
  }
  return (<div>
    <h3>{props.name}</h3>
    {items}
  </div>);
}