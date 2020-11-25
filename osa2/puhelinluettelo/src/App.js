import React, { useState, useEffect } from 'react'
import PersonsList from './components/PersonsList'
import PersonsForm from './components/PersonsForm'
import Warning from './components/Warning'
import Success from './components/Success'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ errorMessage, setErrorMessage] = useState(null)
  const [ successMessage, setSuccessMessage] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }

    else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setSuccessMessage(
            `Added ${personObject.name} `
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })

        .catch (error => {
          setErrorMessage(
            `Adding of ${personObject.name} failed`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  const removeName = (value) => {  
    let id = value.target.id

    let hlo = persons.find(person => String(person.id) === String(id))
    if (window.confirm("Delete " + hlo.name)) { 
      personService
        .remove(id)
        .then (response => {
          console.log(response)
          setPersons(persons.filter(person => String(person.id) !== String(id)),
          setSuccessMessage(
            ` ${hlo.name} deleted `
          ),
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          )})

          .catch (error => {
            setErrorMessage(
              `Person '${hlo.name}' was already removed from server. Reload the page`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
         })
    }

}

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Warning message={errorMessage} />
      <Success message={successMessage} />
      <PersonsForm addname= {addName} namechange= {handleNameChange} numberchange= {handleNumberChange} />
      <h2>Numbers</h2>
      <PersonsList persons= {persons} handleNameRemove= {removeName}/>
    </div>
  )

}

export default App