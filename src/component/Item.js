import React from 'react';

function Item(props){
  {/* <Item key={index} id={index} name = {item.name} cost={item.cost}/> */}
  let test = ()=>{
    alert('working');
  }
  return(
    <li key={props.id} className={  props.selected[props.type].name === props.name &&  "feature__item " + props.className} onClick={()=>props.handleUpdate(props.type,{name:props.name, cost:props.cost})}>
      <div className = 'feature__item'>
        {props.name}({props.cost})
      </div>
    </li>
    )
}



export default Item;