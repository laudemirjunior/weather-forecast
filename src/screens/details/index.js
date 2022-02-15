import React, { useContext } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { WeatherContext } from "../../providers/weather";
import styled from "styled-components/native";

export default () => {
  const { newDetails } = useContext(WeatherContext);
  let moment = newDetails.hour[0].time.split(" ").reverse();
  let date = moment[1].split("-").reverse().join("/");

  return (
    <ScrollView>
      <Container>
        <Text>Previsão hora em hora</Text>
        <Text>{date}</Text>
        {newDetails.hour.map((item, index) => {
          let moment = item.time.split(" ").reverse();
          return (
            <Card key={index}>
              <ImageWeather>
                <Image
                  source={{ uri: `https://${item.condition.icon.slice(2)}` }}
                  style={{ width: 100, height: 100 }}
                />
              </ImageWeather>
              <DataWeather>
                <Text>{moment[0]}</Text>
                <Text>Temperatura: {parseInt(item.temp_c)}°C</Text>
                <Text>Sensação: {parseInt(item.feelslike_c)}°C</Text>
                <Text>{item.condition.text}</Text>
              </DataWeather>
            </Card>
          );
        })}
      </Container>
    </ScrollView>
  );
};

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #9ac1d9;
`;

export const Card = styled.View`
  height: 120px;
  width: 350px;
  margin: 5px 0;
  flex-direction: row;
  border-radius: 10px;
  background-color: white;
`;

export const ImageWeather = styled.View`
  margin: 0 20px;
`;

export const DataWeather = styled.View``;
