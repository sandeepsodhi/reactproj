import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person'; //when importing this person we must make sure that we are importing with capital letter, reason for this becasue there are reserved words which we can not keep like div/class etc.

//we can have only one root element in a componnet

class App extends Component{ 
  render() {
      return(
        <div className="App" >
          <h1>HELLO!! </h1>
          <Person name='Sandeep' age= '26'/>
          <Person name='Singh' age='25'>Hobbies:Bhangra</Person>
          <Person name='Sodhi' age='20'/>
        </div>
      );
    }
  //retur n React.createElement("div","",React.createElement("h1",{className:'App'},"Create New Element within h1!!!"));
}

export default App; 