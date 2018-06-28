import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    people: [
      { id: 1, name: "Andrew", age: 30 },
      { id: 2, name: "Dora", age: 29 },
      { id: 3, name: "Jessica", age: 20 }
    ],
    showPeople: false
  }

  deletePersonHandler = (personIndex) => {
    // slice creates a copy rather than assigning by reference which is default for arrays.
    // Another approach is to use the spread operator (example: people = [...this.state.people])
    const people = this.state.people.slice();
    people.splice(personIndex, 1);
    this.setState({people : people});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];

    people[personIndex] = person;

    this.setState({people : people});
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {
    let people = null;
    let btnClass = '';

    if (this.state.showPeople) {
      people = (
          this.state.people.map((person, index) => {
          return <Person 
            key={person.id}
            click={this.deletePersonHandler.bind(null, index)}
            name={person.name} 
            age={person.age} 
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })
      );

      btnClass = classes.Red;
    }

    const localClasses = [];
    if (this.state.people.length <= 2) {
      localClasses.push(classes.red);
    }
    if (this.state.people.length <= 1) {
      localClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a react app</h1>
        <p className={localClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
      </div>
    );
  }
}

export default App;