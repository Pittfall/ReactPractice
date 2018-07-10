import React from 'react'
import classes from './Cockpit.css';
import Hoc from './Hoc';

const Cockpit = (props) => {
    const localClasses = [];
    let btnClass = props.showPeople ? [classes.Button, classes.Red].join(' ') : classes.Button;

    if (props.people.length <= 2) {
      localClasses.push(classes.red);
    }
    if (props.people.length <= 1) {
      localClasses.push(classes.bold);
    }

    return (
        <Hoc>
            <h1>{props.title}</h1>
            <p className={localClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle People</button>
        </Hoc>
    );
}

export default Cockpit;