import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: []
    }
    this.componentDidMount= this.componentDidMount.bind(this);
  }

componentDidMount(){
  axios.get('/api/inventory').then(res=>
    {console.log(res.data)
      this.setState({inventory: res.data})})
}

  render() {
    let {inventory}= this.state
    return (
      <div >
        <Header />
        <Dashboard inventory={inventory} mountedInventory={this.componentDidMount} />
        <Form inventoryGetAll={this.componentDidMount}/>
      </div>
    )
  }
}

export default App;
