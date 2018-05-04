import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Dashboard.css'

export default class Dashboard extends Component{
    deleteProduct(id){
        axios.delete(`/api/product/${id}`)
        .then(console.log('deleted'))
        .then(this.props.mountedInventory()
    )

    }

    render(){
        let {inventory}= this.props

        return(
            <div className= 'dashboard' >
                { inventory.map( (product, i)=>{
                    // console.log(product.img)
                return(
                 <div className= 'product-group'>
                    <Product key={'productindex' + i} 
                    name={inventory[i].name} 
                    price={inventory[i].price} 
                    image={inventory[i].img} /> 
                    <button key={'deletebutton'+i} 
                    type='button' 
                    onClick={()=>this.deleteProduct(product.id)}>Delete</button>
                    <button key={'editbutton'+i}>Edit</button>
                </div>
            )})
             }
            </div>
        )
    }
}