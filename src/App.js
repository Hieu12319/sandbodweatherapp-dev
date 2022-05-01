import React from "react";
import "./styles.css";
import weatherData from "./weatherData"
import WeatherForcast from "./Components/WeatherForcast";
// import WeatherIcon from "./Components/WeatherIcon";

export default function App() {
  const allWeatherData = weatherData.map((ele, index) => {
    return <WeatherForcast {...ele} key={index} />
  });
  console.log(weatherData)
  return (
    <div className="App">
      <section>
        {allWeatherData}
        </section>
     
    </div>
  );
}
