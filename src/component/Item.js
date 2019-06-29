import React from 'react';

function Item(props){
  {/* <Item key={index} id={index} name = {item.name} cost={item.cost}/> */}
  return(
    <li key={props.id} className={  props.selected[props.type].name === props.name &&  "feature__item " + props.className}>
      <div className = 'feature__item'>
        {props.name}({props.cost})
      </div>
    </li>
    )
}



export default Item;