const Persons = ({ persons, searchPerson }) => {
  return (
    <div>
      {persons
        .filter(person => person.name.toLowerCase().includes(searchPerson.toLowerCase()))
        .map(person => (
          <div key={person.id}>{person.name} {person.number}</div>
        ))
      }
    </div>
  )
}

export default Persons
