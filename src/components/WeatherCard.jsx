import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

  const [iscelsius, setIscelsius] = useState(true)

  const changeTemperature = () => setIscelsius(!iscelsius)

  console.log(weather)
  return (
    <article>
        <h1>Weather App</h1>
        <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section>
          <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          
        </section>

        <section>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <li><span>Wind Speed</span> {weather?.wind.speed} m/s</li>
            <li><span>Clouds</span> {weather?.clouds.all} % </li>
            <li><span>Pressure</span> {weather?.main.pressure} hPa </li>
          </ul>
        </section>

        <h2>{iscelsius ? `${temperature?.celsius} C` : `${temperature?.farenheit} F`}</h2>
        <button onClick={changeTemperature}>{iscelsius ? 'Change F' : 'Chance to C'}</button>

    </article>
  )
}

export default WeatherCard