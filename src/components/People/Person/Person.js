import React from 'react';
import classes from './Person.css';
import Wrapped from '../.././Hoc/Wrapper'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hi, my name is {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Wrapped(person, classes.Person);