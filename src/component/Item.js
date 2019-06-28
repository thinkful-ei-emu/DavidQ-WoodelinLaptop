import React from 'react';

function Item(props){
  {/* <Item key={index} id={index} name = {item.name} cost={item.cost}/> */}
  return(
    <li key={props.id} className="feature__item">
      <div className = ''>
        {props.name}
      </div>
    </li>
    )
}



export default Item;