//import React from 'react';
import { Component } from 'react';
import './Person.css'; 


class Person extends Component{
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor', props );
    }

    componentWillMount () {
        console.log( '[Person.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Person.js] Inside componentDidMount()' );
    }
    render(){ 
        console.log( '[Person.js] Inside render()' );
        return (
            <div className="Person"> 
                <p onClick={this.props.click}> I am a {this.props.name}, and I am  {this.props.age} old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value = {this.props.name} /> 
            </div>
        );
    }

}

export default Person;

// const person = (props) => {
//     const rnd = Math.random();
//     if(rnd > 0.7){
//         //throw new Error('Something went wrong.')
//     }
//     return (
//         <div className="Person"> 
//             <p onClick={props.click}> I am a {props.name}, and I am  {props.age} old</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value = {props.name} /> 
//         </div>
//     );
// };
// export default person;