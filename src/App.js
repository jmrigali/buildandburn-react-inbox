import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Toolbar from './Components/Toolbar';
import MessagesList from './Components/MessagesList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className= "container">
          <Toolbar />
          <MessagesList />
        </div>
      </div>
    );
  }
}

export default App;
