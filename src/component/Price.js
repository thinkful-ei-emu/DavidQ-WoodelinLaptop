import React from 'react';

function Price(props){
    return(
      <div className="summary__total"> 
      <div className="summary__total__label">Your Price: </div>
      <div className="summary__total__value">{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(props.totalPrice) }
     </div>
     </div>
    );
}



export default Price;