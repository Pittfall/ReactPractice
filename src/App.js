import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    people: [
      { name: "Andrew", age: 30 },
      { name: "Dora", age: 29 },
      { name: "Jessica", age: 20 }
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

  nameChangedHandler = (event) => {
    this.setState( {
      people: [
        { id: '1', name: event.target.value, age: 30 },
        { id: '2', name: event.target.value, age: 29 },
        { id: '3', name: event.target.value, age: 20 }
      ]
    })
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person 
              click={this.deletePersonHandler.bind(null, index)}
              name={person.name} 
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
      </div>
    );
  }
}

export default App;
