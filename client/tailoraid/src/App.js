import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home.js';
import Header from './components/welcome.js'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
