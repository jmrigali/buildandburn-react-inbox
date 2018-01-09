import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Toolbar';
import MessageList from './Components/MessageList';

class App extends Component {
  constructor (props){
    super(props)
    this.state= {messages: props.messages}
  }

  toggleRead(message) {
    let index = this.state.messages.indexOf(message);
    this.setState({
      messages:[...this.state.messages.slice(0,index), {...message, read: !message.read}, ...this.state.messages.slice(index + 1)]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">Inbox Styleguide</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="/">Components</a></li>
                <li><a href="/example">Example</a></li>
                <li><a href="/css">CSS</a></li>
                <li><a href="/seeds">Seeds</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <Toolbar messages= {this.state.messages} />
          <MessageList messages= {this.state.messages} toggleRead = {this.toggleRead.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
