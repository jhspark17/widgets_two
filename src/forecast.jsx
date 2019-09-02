import React, {useEffect, useState} from 'react'


const Forecast = props => {
  const [temp, setTemp] = useState("Fetching Weather")
  const [location, setLocation] = useState("San Francisco")
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=274c6331075a7e8f01c994450eea1cbe`)
    .then(response => response.json())
    .then(data => weatherData(data))
  }, [location])

  const weatherData = (data) => {
    
    if (data.main) {
      setLocation(location)
      setTemp((`${Math.round((((data.main.temp - 273.15) * 9) / 5 + 32))} F`))
    } else {
      setLocation(data.message)
      setTemp("")
      setTimeout(() => {
        setLocation("San Francisco");
      }, 5000)
    }
    document.getElementById("location").value = ""
  }


  const handleSubmit = e => {
    e.preventDefault();
    let current = document.getElementById("location").value
    setTemp("Fetching Weather")
    setLocation(current)
  }

  const content = (
    <div className="forecast">
      <div>
      {location}
      </div>
      <div>
      {temp}
      </div> 
      <form className="location-input">
        <input id="location" placeholder="Enter City"/>
        <input id="submit-button" type="submit" onClick={handleSubmit}/>
      </form>
    </div>
  )
  return content;
}

export default Forecast