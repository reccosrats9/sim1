import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            price:0,
            imgurl:''
        }
        this.handleChangeName= this.handleChangeName.bind(this)
        this.handleChangePrice= this.handleChangePrice.bind(this)
        this.handleChangeImg=this.handleChangeImg.bind(this)
        this.postProduct=this.postProduct.bind(this)
        this.clearInputBoxes=this.clearInputBoxes.bind(this)
    }

    handleChangeName(e) {
        this.setState({name: e.target.value})
    }

    handleChangePrice(e){
        this.setState({price: e.target.value})
    }

    handleChangeImg(e){
        this.setState({imgurl: e.target.value})
    }

    postProduct(){
        axios.post('/api/product/').then(()=>
        this.props.inventoryGetAll())
        this.clearInputBoxes()
    }

    clearInputBoxes(e){
        this.setState({
            name:'',
            price: 0,
            imgurl:''
        })
    }


    render(){
        return(
            <div>
                <p>Image URL: <input onChange= {this.handleChangeImg} /></p>
                <p>Product Name: <input onChange={this.handleChangeName} /></p>
                <p>Price: <input onChange={this.handleChangePrice}/></p>
                <button onClick= {this.clearInputBoxes}>Cancel</button>
                <button onClick={this.postProduct} >Add to Inventory</button>
            </div>
        )
    }
}