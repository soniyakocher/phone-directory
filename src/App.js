import React, { Component } from 'react';
import Header from "./Header";
import './App.css'

class App extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <button id="add-btn">Add</button>
        <div className="main">
          <span id="name">Name</span> <br />
          <span id="phone">Phone</span>
        </div>
      </div>

    );
  }
}

export default App;
