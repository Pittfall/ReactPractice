import React from 'react';
import Person from './Person/Person'

const People = (props) => props.people.map((person, index) => 
                <Person 
                    click={() => props.clicked(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => props.changed(event, person.id)} />
            );

export default People;