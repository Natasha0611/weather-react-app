import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
const[loaded, setLoaded] = useState(false);
const[forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);

   function handleResponse(response){
        console.log(response);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if(loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                    if (index < 6) {
                            return (
                            <div className="col" key={index}>
                             <WeatherForecastDay data={dailyForecast} />
                             </div>
                            );
                          }else{
                            return null
                          }
                    })}
                </div>
            </div>
        );
    }
    else{
        const apiKey = `907fef83425ee6575ce345a2f87d8989`;
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
  
    }
}