import React from 'react'

const WeatherCard = ({weather}) => {
    console.log(weather)
  return (
    <article>
        <h1>Weather App</h1>
        <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section>
          <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
          <h3>Temperatura</h3>
        </section>

        <section>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <li><span>Wind Speed</span> {weather?.wind.speed} m/s</li>
            <li><span>Clouds</span> {weather?.clouds.all} % </li>
            <li><span>Pressure</span> {weather?.main.pressure} hPa </li>
          </ul>
        </section>

    </article>
  )
}

export default WeatherCard