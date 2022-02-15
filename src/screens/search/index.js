import React, { useEffect, useState } from "react";
import { Text, Image } from "react-native";
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
import { newImage } from "../../functions/switch";
import stars from "../../images/star/38.png";

export default ({ navigation }) => {
  const { search, weather, newCity, setNewDetails } = useWeather();
  const [city, setCity] = useState("");

  useEffect(() => {
    search("paranagua");
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Image
          source={newImage(item.day.condition.text)}
          style={{ width: 250, height: 250, zIndex: 2, resizeMode: "contain" }}
        />
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
                navigation.navigate("Details");
                setNewDetails(item);
              }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>Detalhes</Text>
            </Button>
          </CardWeatherInt>
        </CardWeather>
      </Card>
    );
  };

  return (
    <LinearGradient colors={["#5FA0D9", "#9AC1D9"]} style={{ flex: 1 }}>
      <Container>
        <BoxInput>
          <TextInput value={city} onChangeText={setCity} />
          <Button onPress={() => search(city)}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Buscar</Text>
          </Button>
        </BoxInput>
        {weather === null ? (
          <Image
            source={stars}
            style={{
              width: 250,
              height: 250,
              zIndex: 2,
              resizeMode: "contain",
              top: 70,
            }}
          />
        ) : (
          <Carousel
            layout={"default"}
            data={weather}
            sliderWidth={400}
            itemWidth={220}
            renderItem={renderItem}
            inactiveSlideScale={0.6}
          />
        )}
      </Container>
    </LinearGradient>
  );
};
