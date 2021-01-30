import './App.css';
import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react';
import Person from './Person/Person'; //when importing this person we must make sure that we are importing with capital letter, reason for this becasue there are reserved words which we can not keep like div/class etc.


//we can have only one root element in a componnet

class App extends Component{  

  //props are passed from outside
  //states are managed from inside a component, state is an reserved word for javascript object
  
  state = {
    persons: [
      { id : '1', name: 'Max', age: 20 },
      { id : '2', name: 'Mannu', age: 21 },
      { id : '3', name: 'Stephanie', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  //name it like handler as good practice to show that it not a active function but an event handle
  swtichNameHandler = (newName) => {

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

  //version 2
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = { ...this.state.persons[personIndex] }; //or Object,assign({}, this.state.persons[personIndex])
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  // version 1
  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Max', age: 20 },
  //       { name: event.target.value, age: 21 },
  //       { name: 'Stephanie', age: 22 }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {

    // // version1
    // const person  = this.state.persons;  //since arrays are reference type, we are just copying the reference to old array, this might cause unexpected results and it is not a good approach, it is better to create an array by calling splice method with no parameter
    
    const person = this.state.persons.slice(); //or  = [...this.state.persons]; //using spread js operator 
    person.splice(personIndex, 1);
    this.setState({persons: person})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons : !doesShow
    })
  }

  render() {

      const style = {
        color: 'white',
        backgroundColor: 'green',
        font: 'inherit',
        border : '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover' : {
          backgroundColor : 'lightgreen',
          color: 'black'
        }  //for using pseudoCode properties we are using radium, and for declaring them in javascript we specify them with single quotes as they are not valid properties in js.
      };

      let person = null;
      if(this.state.showPersons){
        person = (
          <div>

            {/* version 3 */}
            {
              this.state.persons.map((person,index) => {
                return <Person 
                click = {() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                /> 
              })
            }

            {/* version2 : creating an array of person object and printing it. */}
            {/* {this.state.persons.map(person => {
              return <Person 
              name={person.name} 
              age={person.age}
              />  //person.name + " "
            })} */}

            {/* version 1 */}
            {/* <Person 
              name={this.state.persons[0].name} 
              age = {this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click = {this.swtichNameHandler.bind(this,'Max!')} 
              changed = {this.nameChangedHandler}
              >Hobbies:Bhangra</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/> */}
          </div> 
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor : 'salmon',
          color: 'black'
        }
      }

      const classes = [];

      if(this.state.persons.length <= 2){
        classes.push('red');
      }
      if(this.state.persons.length<=1){
        classes.push('bold');
      }

      return(
        <StyleRoot>
        <div className="App" >
          <h1>HELLO!! </h1>
          <p className={classes.join(' ')}> Testing classes</p>

          {/* if we are specifying event onClick event as with parenthis in function name then it will immediately call the function as soon as the react loads the dom {this.swtichNameHandler()} */}
          {/* if we are defining a method with arrow function approach, then it will automatically add a return keyword implicitly. Here this satement and change made is contradicting with above statement, but here we are not directly calling the method on dom load. But we are calling it with onClick event. Also this statement is not recommended as it is not that much efficient as dom has to be re-rendered, do it only if required in some scenarios. Use the below bind statement instead. */}
           <button
           style={style} 
            //onClick={() => this.swtichNameHandler('Maximiam!!')}
           onClick = {this.togglePersonsHandler}
           >Toggle Name</button>
            {/* { this.state.showPersons === true?  */}
            {person}
              {/* // : null } */}
        </div>
        </StyleRoot>
      );
    }
  //retur n React.createElement("div","",React.createElement("h1",{className:'App'},"Create New Element within h1!!!"));
}

export default Radium(App);  