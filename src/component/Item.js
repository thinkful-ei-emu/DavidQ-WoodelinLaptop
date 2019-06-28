import React from 'react';

function Item(props){
    return(
         <li key={props.id} className="feature__item">
                <div className = ''
                // {featureClass}
                  
                  onClick={e => this.updateFeature(props.id, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
    )
}



export default Item;