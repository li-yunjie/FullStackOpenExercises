const Filter = ({ search, handleSearchChange, searchPerson }) => {
  return (
    <form onSubmit={searchPerson}>
      <div>
        filter shown with: <input value={search} onChange={handleSearchChange} />
      </div>
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default Filter