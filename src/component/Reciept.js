import React from 'react';
import Price from './Price';
import Item from './Item'
import Part from './Part';

{/* <Reciept items = {this.state.selected} /> */}

class Reciept extends React.Component{
    constructor (props){
      console.log(props.items)
        super(props);
        this.state = {
            totalPrice: null
        };
    }
    calculateTotal(items){
      let total = 0;
      items.forEach((i)=>{
        total += i.cost;
      });
      console.log(`total is ${total}`);
      return total;
    }


    
  

    render(){
      this.reciept = [];

      for(let [key, value] of Object.entries(this.props.items)){
              this.reciept.push({name: value.name, type: key, cost:value.cost})
      }

        let items = this.reciept.map((item, index) => {
          console.log(this.props.items);
            return <Part key={index} id={index} name={item.type} parts = {this.props.items[item.type]} selected = {this.props.items}/>
        })

    return(
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {items}
        <Price totalPrice = {this.calculateTotal(this.reciept)}/>
      </section>
      );
    }

}



export default Reciept;