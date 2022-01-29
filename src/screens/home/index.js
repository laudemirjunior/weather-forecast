import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useWeather } from "../../providers/weather";
import {
  BoxInput,
  Button,
  Card,
  CardWeather,
  CardWeatherInt,
  City,
  Container,
  Temp,
  TempInt,
  TempMin,
  TextInput,
} from "./styles";
import { newSvg } from "../../functions/switch";

export default function Home({ navigation }) {
  const { search, weather, newCity, setNewDetails } = useWeather();
  const [city, setCity] = useState("");

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    search("paranagua");
  }, []);

  const renderItem = ({ item }) => {
    let Svg = newSvg(item.day.condition.text);

    return (
      <Card>
        <Svg width={300} height={300} style={{ zIndex: 2 }} />
        <CardWeather>
          <CardWeatherInt>
            <City>
              {newCity.name} - {newCity.region}
            </City>
            <Text>{item.day.condition.text}</Text>
            <Temp>
              <TempMin>
                <TempInt>{parseInt(item.day.mintemp_c)}</TempInt>
              </TempMin>
              <TempMin>
                <TempInt>{parseInt(item.day.maxtemp_c)}</TempInt>
              </TempMin>
            </Temp>
            <Text>{item.date.split("-").reverse().join("/")}</Text>
            <Button
              onPress={() => {
                goTo("StackDetails");
                setNewDetails(item);
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Detalhes</Text>
            </Button>
          </CardWeatherInt>
        </CardWeather>
      </Card>
    );
  };

  return (
    <LinearGradient colors={["#44AFF2", "#2585D9"]} style={{ flex: 1 }}>
      <Container>
        <BoxInput>
          <TextInput value={city} onChangeText={setCity} />
          <Button onPress={() => search(city)}>
            <Text style={{ fontSize: 20, color: "white" }}>Buscar</Text>
          </Button>
        </BoxInput>
        <Carousel
          layout={"default"}
          data={weather}
          sliderWidth={400}
          itemWidth={400}
          renderItem={renderItem}
        />
      </Container>
    </LinearGradient>
  );
}
