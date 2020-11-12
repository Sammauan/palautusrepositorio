import React from 'react'
import Person from './Person'

const PersonsList = (props) => {
  let persons= props.persons
  console.log(props.persons)

  return (
    persons.map(person => 
      <Person key={person.name} name={person.name} number={person.number} id={person.id} handler= {props.handleNameRemove} />
    )
  )
}

export default PersonsList