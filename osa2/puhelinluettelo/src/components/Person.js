import React from 'react'

const Person = (props) => {
  return (
    <div>
    <p> {props.name} {props.number}  <button onClick={props.handler} id= {props.id} >delete</button> </p>
     </div>
  )
}

export default Person