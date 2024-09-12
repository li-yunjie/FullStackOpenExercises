import { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import axios from 'axios'
import personService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService.getAll().then(allPersons => {
      setPersons(allPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    
    if (existingPerson) {
      updatePerson(existingPerson.id, { name: newName, number: newNumber })
    } else {
      const newPerson = { 
        name: newName, 
        number: newNumber
      }
      personService.addPerson(newPerson).then(returnedPerson => { 
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.id !== id));
      }).catch(error => {
        console.error("Error deleting person:", error);
      });
    }
  }

  const updatePerson = (id, newPerson) => {
    personService.updatePerson(id, newPerson).then(returnedPerson => {
      setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
    })
  }

  const searchPerson = (event) => {
    event.preventDefault()
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    setPersons(filteredPersons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        search={search} 
        handleSearchChange={handleSearchChange} 
        searchPerson={searchPerson}
      />
      <h3>add a new</h3>
      <PersonForm 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />    
      <h3>Numbers</h3>
      <Persons persons={persons} searchPerson={search} deletePerson={deletePerson} />
    </div>
  )
}

export default App