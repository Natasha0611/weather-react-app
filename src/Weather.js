import React from "react";
import "./Weather.css"
import axios from "axios";

export default function Weather(){
    const[weatherData, setWeatherData] = useState({false});
    function handleRespnse(response){
        setWeatherData({
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date:"Wednesday 17:00",
            description:response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name,
        })
        setReady(true);
    }
    if(weatherData.ready){
        return (
       <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input
                    type="Search"
                    placeholder="Enter a city..."
                    className="form-control"
                    autoFocus="on"
                    />
                </div>
             <div className="col-3"  >
                <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                />
            </div> 
        </div>
        </form>
       </div>     
   
    )
}