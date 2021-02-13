//import React, { Component } from 'react';
import React, { PureComponent } from 'react'; 
import Person from './Person/Person'

//Component is changed with PureComponent, then it is not required to write ShouldComponentUpdate becasue it internally implements that function for invidual properties. but it does not mean that we should implement PureComponent becasue in some case we do want to update the dom always.
class Persons extends PureComponent {

    constructor(props){
        super(props); //call to super contructor is required if we implement a contructor 
        console.log('[Persons.js] Inside Contructor', props )
    }
    componentWillMount(){
        console.log('[Persons.js] Inside ComponentWillMount()');
    }
    componentDidMount(){
        console.log('[Persons.js] Inside ComponentDidMount()');
    }
    componentWillReceiveProps(nextProps){
        console.log('[Update Persons.js] Inside componentWillReceiveProps()', nextProps);
    }
    
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    //     //return true;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[Persons.js] Inside componentWillUpdate()',nextProps, nextState);
    }
    componentDidUpdate(){
        console.log('[Update Persons.js] Inside componentDidUpdate()');
    }
    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map( (person,index) => {
            return <Person 
            click = {() => this.props.clicked(index)}
            name={person.name} 
            position = { index }
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />
        })
    }
}

export default Persons;

// const persons = (props) => (
//     props.persons.map( (person,index) => {
//         return <Person 
//           click = {() => props.clicked(index)}
//           name={person.name} 
//           age={person.age}
//           key={person.id}
//           changed={(event) => props.changed(event, person.id)}
//         />
//     })
// ); 
// export default persons;