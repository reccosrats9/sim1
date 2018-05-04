import React from 'react';
import './Product.css'

export default function Product(props){
    // console.log(props.image)
    return(
        <div className= 'product' >
            <p>{props.name}</p> 
            <p>${props.price}</p> 
            <img src={props.image} alt='' className='photo' />
        </div>
    )
}