import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useWeather } from "../../providers/weather";
import { ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import Card from "../../components/Card";

export default () => {
  const { searchWeatherDay, dataWeatherDay } = useWeather();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      searchWeatherDay(
        `${location.coords.latitude},${location.coords.longitude}`
      );
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <LinearGradient
      colors={["#5FA0D9", "#9AC1D9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {dataWeatherDay === null ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Card item={dataWeatherDay} />
      )}
    </LinearGradient>
  );
};
