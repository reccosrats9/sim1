import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component{
    deleteProduct(id){
        axios.delete(`/api/product/${id}`)
        .then(this.props.mountedInventory()
    )

    }

    render(){
        let {inventory}= this.props

        return(
            <div>
                { inventory.map( (product, i)=>{
                return(
                 <div>
                    <Product key={'productindex' + i} name={inventory[i].name} price={inventory[i].price} image={inventory[i].image} /> 
                    <button onClick={this.deleteProduct(inventory[i].id)}>Delete</button>
                    <button>Edit</button>
                </div>
            )})
             }
            </div>
        )
    }
}