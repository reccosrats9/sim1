import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component{

    render(){
        let {inventory}= this.props

        return(
            <div>
                { inventory.map( (product, i)=><Product key={'product' + i} name={inventory[i].name} price={inventory[i].price} image={inventory[i].image} /> ) }
            </div>
        )
    }
}