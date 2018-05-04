import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(){
    super()
    this.state={
      inventory: [
        {name: 'doll', price: 20, image: 'asdfae.com'},
        {name: 'fairy', price: 124329324, image: 'magic.com'},
        {name: 'toy', price: 5, image: 'toysrus.com'}
      ]
    }
  }

  render() {
    let {inventory}= this.state
    return (
      <div >
        <Header />
        <Dashboard inventory={inventory} />
        <Form />
      </div>
    )
  }
}

export default App;
