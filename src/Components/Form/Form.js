import React, {Component} from 'react';
import axios from 'axios';
import './Form.css'

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            price:0,
            img:'',
            currentID: null

        }
        this.handleChangeName= this.handleChangeName.bind(this)
        this.handleChangePrice= this.handleChangePrice.bind(this)
        this.handleChangeImg=this.handleChangeImg.bind(this)
        this.postProduct=this.postProduct.bind(this)
        this.clearInputBoxes=this.clearInputBoxes.bind(this)
    }

    handleChangeName(e) {
        // console.log(this.state.name)
        this.setState({name: e.target.value})
    }

    handleChangePrice(e){
        // console.log(this.state.price)
        this.setState({price: e.target.value})
    }

    handleChangeImg(e){
        this.setState({img: e.target.value})
        // console.log(this.state.img)
    }

    postProduct(){
        console.log(this.state)
        let newItem= this.state;
        axios.post('/api/product/',{newItem}).then(()=>
        this.props.inventoryGetAll())
    }

    clearInputBoxes(){
        this.setState({
            name:'',
            price: 0,
            img: ''
    })
    }

    componentDidUpdate(prevProps){
        if (prevProps!== this.props.currentProduct){
            // this.setState({currentID: this.props.currentProduct})
        }
    }


    render(){
        return(
            <div className= 'form-box'>
                <p>Image URL: <input onChange= {this.handleChangeImg} value={this.state.img}/></p>
                <p>Product Name: <input onChange={this.handleChangeName} value= {this.state.name}/></p>
                <p>Price: <input onChange={this.handleChangePrice} value={this.state.price}/></p>
                <button type='button' onClick= {this.clearInputBoxes}>Cancel</button>
                <button onClick={this.postProduct} >Add to Inventory</button>
            </div>
        )
    }
}