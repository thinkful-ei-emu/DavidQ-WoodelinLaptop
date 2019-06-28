import React from 'react';
import Price from './Price';
import Item from './Item'

{/* <Reciept items = {this.state.selected} /> */}

class Reciept extends React.Component{
    
    constructor (props){
        super(props);
        this.state = {
            totalPrice: null
        };
        
         this.reciept = [];

        for(let [key, value] of Object.entries(this.props.selected)){
                this.reciept.push({name: value.name, type: key, cost:value.cost})
        }
    }


    
  

    render(){

        let items = this.reciept.map((item, index) => {
            return <Item key={index} id ={index} name ={item.type} cost = {item.cost} />
        })

    return(
        {items}
        <Price />
    );
    }

}



export default Reciept;