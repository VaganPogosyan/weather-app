import React, { useEffect, useState } from 'react';
import styles from '../css/App.module.css';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    localtime: '',
    temp_f: '',
    temp_c: '',
    conditionText: '',
    conditionIcon: '',
  });

  const {
    city,
    country,
    localtime,
    temp_f,
    temp_c,
    conditionText,
    conditionIcon,
  } = weather;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'http://api.weatherapi.com/v1/current.json?key=631bd38df49f44b98f633754222207&q=London&aqi=no'
        );
        const data = res.data;
        setWeather({
          city: data.location.name,
          country: data.location.country,
          localtime: data.location.localtime,
          temp_f: data.current.temp_f,
          temp_c: data.current.temp_c,
          conditionText: data.current.condition.text,
          conditionIcon: data.current.condition.icon,
        });
        console.log(res.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.weather}>
      <h1>{city}</h1>
      <p>{country}</p>
      <p>{localtime}</p>
      <img src={conditionIcon} alt=''></img>
      <p>{conditionText}</p>
      <h2>{temp_c}</h2>
      <h2>{temp_f}</h2>
    </div>
  );
}

export default Weather;
