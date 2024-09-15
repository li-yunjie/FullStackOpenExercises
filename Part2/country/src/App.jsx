import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    console.log("fetching all countries aaaaa")
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        console.log("response", response.data);
        setAllCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all countries:", error);
        setAllCountries([]);
      });
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    const value = event.target.value
    console.log("search value", value)
    setSearch(value)
    setCountries(allCountries.filter((country) => country.name.common.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <>
      <div>find countries <input value={search} onChange={handleSearch} /></div>
      <div>{countries.length > 10 ? "Too many matches, specify another filter" : countries.map((country) => <div key={country.name.common}>{country.name.common}</div>)}</div>
      <div>
        {countries.length === 1 && countries.map((country) => (
          <div key={country.name.common}>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages</h3>
            <ul>
              {Object.values(country.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
