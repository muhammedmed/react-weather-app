import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Weather from './Weather'

function CityName(props) {
  return (
    <div>
      <div className="heading-body">
        <p>{props.city} Weather Forecast </p>
      </div>
      <Weather city={props.city} />
    </div>
  )
}
export default CityName
