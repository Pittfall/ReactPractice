import React from 'react'
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const localClasses = [];
    let btnClass = props.showPeople ? classes.Red : '';

    if (props.people.length <= 2) {
      localClasses.push(classes.red);
    }
    if (props.people.length <= 1) {
      localClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={localClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle People</button>
        </div>
    );
}

export default Cockpit;