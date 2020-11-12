import React from 'react'

const PersonsForm = (props) => {
  return (
    <form onSubmit={props.addname}>
      <div>
        name: <input 
        onChange={props.namechange}
      />
      </div>
      <div>number: <input 
        onChange={props.numberchange}
      />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonsForm