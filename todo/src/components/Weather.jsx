// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'nes.css/css/nes.min.css'; 
import '../css/Style.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '3d16d41775c6b95c410b5b1e4bb8e322';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [apiKey]);

  const getWeatherText = () => {
    const weatherDescription = weatherData?.weather[0]?.description.toLowerCase();

    if (weatherDescription.includes('clear')) {
        return 'はれ';
    } else if (weatherDescription.includes('rain')) {
        return 'あめ';
    } else if (weatherDescription.includes('cloud')) {
        return 'くもり';
    } else if (weatherDescription.includes('snow')) {
        return 'ゆき';
    } else if (weatherDescription.includes('drizzle')) {
        return 'きりさめ';
    } else if (weatherDescription.includes('thunderstorm')) {
        return 'らいう';
    }   
    else {
        return '？？？';
    }
  };

  return (
    <div>
      {weatherData && (
        <div className='weather-container'>
            <div className='weather-content'>
                <p>とうきょうのてんき:</p>
                <p className='span-text'>{getWeatherText()}</p>
            </div>
            <div className='weather-content'>
                <p>へいきんきおん:</p>
                <p className='span-text'>{weatherData.main.temp}°C</p>
            </div>
            <div className='weather-content'>
                <p>さいていきおん:</p>
                <p className='span-text'>{weatherData.main.temp_min}°C</p>
            </div>
            <div className='weather-content'>
                <p>さいこうきおん:</p>
                <p className='span-text'>{weatherData.main.temp_max}°C</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
