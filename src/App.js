import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person'; //when importing this person we must make sure that we are importing with capital letter, reason for this becasue there are reserved words which we can not keep like div/class etc.

//we can have only one root element in a componnet

class App extends Component{  

  //props are passed from outside
  //states are managed from inside a component, state is an reserved word for javascript object
  
  state = {
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Mannu', age: 21 },
      { name: 'Stephanie', age: 22 }
    ],
    otherState: 'some other value'
  }
  
  //name it like handler as good practice to show that it not a active function but an event handle
  swtichNameHandler = (newName) => {
    console.log('was clicked');
    //DON'T DO THIS this.state.persons[0].name = 'Max'; //never try mutate object like this.
    //we have a set state method in component class. Set state merges with its existing state 

    this.setState({
        persons: [
          { name : newName, age : 28 },
          { name : 'Mannu', age : 21 },
          { name : 'Stephanie', age: 23 }
        ]
    })
  }

  render() {
      return(
        <div className="App" >
          <h1>HELLO!! </h1>
          {/* if we are specifying event onClick event as with parenthis in function name then it will immediately call the function as soon as the react loads the dom {this.swtichNameHandler()} */}
          {/* if we are defining a method with arrow function approach, then it will automatically add a return keyword implicitly. Here this satement and change made is contradicting with above statement, but here we are not directly calling the method on dom load. But we are calling it with onClick event. Also this statement is not recommended as it is not that much efficient as dom has to be re-rendered, do it only if required in some scenarios. Use the below bind statement instead. */}
           <button onClick={() => this.swtichNameHandler('Maximiam!!')}>Switch Name</button>
           <Person 
            name={this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click = {this.swtichNameHandler.bind(this,'Max!')} >Hobbies:Bhangra</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
    }
  //retur n React.createElement("div","",React.createElement("h1",{className:'App'},"Create New Element within h1!!!"));
}

export default App;  