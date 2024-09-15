import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Components/Country'

function App() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState(null)

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
      <div>
        {countries.length > 10 
          ? "Too many matches, specify another filter" 
          : countries.map((country) => (
              <div key={country.name.common}>
                {country.name.common}
                <button onClick={() => setShowCountry(country)}>show</button>
              </div>
            ))
        }
      </div>
      <div>
        {showCountry
        ? <Country key={showCountry.name.common} country={showCountry} />
        : null}
      </div>
      <div>
        {countries.length === 1 && countries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </>
  )
}

export default App
