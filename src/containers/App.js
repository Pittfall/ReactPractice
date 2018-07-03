import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPeople) {
      people = ( <People people={this.state.people} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} /> );
    }

    return (
      <div className={classes.App}>
        <Cockpit title={this.props.title} people={this.state.people} showPeople={this.state.showPeople} clicked={this.togglePeopleHandler} />
        {people}
      </div>
    );
  }
}

export default App;