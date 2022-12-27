
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  useEffect(()=>{
    const success = (pos) => {
      const obj={
        lat:pos.coords.latitude,
        lon:pos.coords.longitude
      }     
      setCoords(obj);
    }
    //Esto hace el llamdo a la api del navegador, para usar la ubicacion actual
    navigator.geolocation.getCurrentPosition(success)
  },[])

  //console.log(coords)

  //----------Peticion del Clima--------

useEffect(()=>{
  if (coords){
    const APIKEY = '1f883653ebbc11a3ba0c45670515dd87'
    const URL =`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
    .then(res => setWeather(res.data))
    .catch(err=> console.log(err))

  }
  
},[coords])

console.log(weather)

  return (
    <div className="App">
      <WeatherCard weather={weather}/>

    </div>
  )
}

export default App
