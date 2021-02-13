import React, { Component } from 'react';
import './Person.css'; 

import PropTypes from 'prop-types';
 
class Person extends Component{
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor', props );
        this.inputElement  = React.createRef();
    }

    componentWillMount () {
        console.log( '[Person.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Person.js] Inside componentDidMount()' );
        if(this.props.position === 0){
            this.inputElement.current.focus();
        }
    }
    
    focus(){
        this.inputElement.current.focus();
    }

    render(){ 
        console.log( '[Person.js] Inside render()' );
        return (
            <div className="Person"> 
                <p onClick={this.props.click}> I am a {this.props.name}, and I am  {this.props.age} old</p>
                <p>{this.props.children}</p>
                <input 
                    ref = { this.inputElement }
                    type="text" 
                    onChange={this.props.changed} 
                    value = {this.props.name} /> 
            </div>
        );
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string, 
    age : PropTypes.number,
    changed : PropTypes.func
};


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