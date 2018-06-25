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

  switchNameHandler = (newName) => {
    let newPeople = this.state.people.slice();
    newPeople[0].name = (newPeople[0].name === newName) ? "Liviu" : newName;
    this.setState({people: newPeople});
  }

  nameChangedHandler = (event) => {
    this.setState( {
      people: [
        { name: "Andrew", age: 30 },
        { name: event.target.value, age: 29 },
        { name: "Jessica", age: 20 }
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

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={style} onClick={this.togglePeopleHandler}>Toggle People</button>
        {
          this.state.showPeople ?
            <div>
              <Person 
              name={this.state.people[0].name} 
              age = {this.state.people[0].age}>My hobby is fishing</Person>
              <Person 
              name={this.state.people[1].name} 
              age = {this.state.people[1].age} 
              click={this.switchNameHandler.bind(this, "Christina")} 
              changed={this.nameChangedHandler} />
              <Person 
              name={this.state.people[2].name} 
              age = {this.state.people[2].age} />
            </div> : null
          }
      </div>
    );
  }
}

export default App;
