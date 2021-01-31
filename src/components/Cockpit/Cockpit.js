import React from 'react';

const cockpit = (props) => {

    const style = {
        color: 'white',
        backgroundColor: 'green',
        font: 'inherit',
        border : '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    if(props.showPersons){
        style.backgroundColor = 'red'
    }

    const classes = [];

    if(props.persons.length <= 2){
    classes.push('red');
    }
    if(props.persons.length<=1){
    classes.push('bold');
    }

    return (
    <div>
        <h1>HELLO!! </h1>
        <p className={classes.join(' ')}> Testing classes</p>
        <button
        style={style} 
        onClick = {props.clicked}
        >Toggle Name</button>
    </div>
    );
};

export default cockpit