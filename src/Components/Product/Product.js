import React from 'react';

export default function Product(props){
    return(
        <div>
            {props.name}, {props.price}, {props.image}
        </div>
    )
}