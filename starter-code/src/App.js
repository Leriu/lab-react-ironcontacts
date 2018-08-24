import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ContactRow from './contactrow'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0,5)
    }
  }
  
  displayContacts() {
    let result = [];
    for (let i = 0; i < this.state.contacts.length; i++) {
      result.push(
        <ContactRow
          key={i} 
          contact={this.state.contacts[i]} 
        />
      )
    }
    return result;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Ironhacker</h1>
        </header>
        <p className="App-intro">
          To get squanched, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <table>
          <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th> 
            <th>Age</th>
          </tr>
          {this.displayContacts()}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
