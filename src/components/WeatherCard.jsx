import React from 'react'

const WeatherCard = ({weather}) => {
    console.log(weather)
  return (
    <article>
        <h1>Weather App</h1>
        <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        
    </article>
  )
}

export default WeatherCard