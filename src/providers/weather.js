import React, { createContext, useState, useContext } from "react";
import axios from "axios";

export const WeatherContext = React.createContext([]);

export const WeatherProvider = ({ children }) => {
  let key = "823942bbc48c4a7388732902210510";

  const [weather, setWeather] = useState([]);
  const [newCity, setNewCity] = useState([]);
  const [newDetails, setNewDetails] = useState([]);

  const search = async (value) =>
    await axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${value}&days=3&aqi=no&alerts=no`
      )
      .then((r) => {
        setNewCity(r.data.location);
        setWeather(r.data.forecast.forecastday);
      })
      .catch((e) => alert(e));

  return (
    <WeatherContext.Provider
      value={{ search, weather, newCity, newDetails, setNewDetails }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
