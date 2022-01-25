import React, { useState } from 'react'
import CityName from './CityName'
import '../index.css'
import City from '../City/City.json'

function Dropdown() {

  const [cityName, setCityName] = useState("Adana")
  const [city, setCity] = useState("Adana")

  function handleClick() {
    setCity(cityName)
  }

  function handleChange(e) {
    setCityName(e.target.value)
  }

  return (
    <div className="drop">
      <div className="Dropdown">
        <select onChange={handleChange} >
        
        {
            City.CityNames.map((result) => (<option text={result.id} >{result.name}</option>))
        }
</select>
        <span>
          <button onClick={handleClick} className="btn">
            Select
          </button>
        </span>
      </div>
      <CityName city={city}/>
    </div>
  )
}

export default Dropdown



























































































































































