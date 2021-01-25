//import React from 'react';

//following es6 syntax to create a function
//cont->not planing to change this function, person->functionName, () -> parameterList for function
//prop is the default parameter which have all the parameter in it as property from component creation
const person = (props) => {

    //if we want to insert some javascript variables inside jsx then we need to insert them in single curly braces.
    //children refers to any element within opening and closing tag of our element, it even refers to the plain text

    return (
        <div>
            <p onClick={props.click}> I am a {props.name}, and I am  {props.age} old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name} /> 
        </div>
    );

};

export default person;