//import React from 'react';

//following es6 syntax to create a function
//cont->not planing to change this function, person->functionName, () -> parameterList for function
//prop is the default parameter which have all the parameter in it as property from component creation
const person = (prop) => {
    //if we want to insert some javascript variables inside jsx then we need to insert them in single curly braces.
    //children refers to any element within opening and closing tag of our element, it even refers to the plain text
    return (
        <div>
            <h2>I am a {prop.name}, and I am  {prop.age} old</h2>
            <p>{prop.children}</p>
        </div>
    );

};

export default person;