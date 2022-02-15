import { Image, Text } from "react-native";
import styled from "styled-components/native";
import { newImage } from "../functions/switch";

export default ({ item }) => {
  return (
    <>
      <Image
        source={newImage(item.current.condition.text)}
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          zIndex: 2,
          resizeMode: "contain",
          top: 70,
        }}
      />
      <CardWeather>
        <CardWeatherInt>
          <City>
            {item.location.region} - {item.location.name}
          </City>
          <Text>{item.current.condition.text}</Text>
          <Temp>
            <TempMin>
              <TempInt>{parseInt(item.current.temp_c)}</TempInt>
            </TempMin>
          </Temp>
          <Text>{item.current.last_updated}</Text>
        </CardWeatherInt>
      </CardWeather>
    </>
  );
};

const CardWeather = styled.View`
  width: 250px;
  height: 350px;
  background-color: #fff;
  border-radius: 30px;
  justify-content: flex-end;
  margin-top: 120px;
`;

export const City = styled.Text`
  font-weight: bold;
  color: #d2d2d2;
  font-size: 24px;
`;

const Temp = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 200px;
`;

const TempMin = styled.View`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid #d2d2d2;
`;

const TempInt = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const CardWeatherInt = styled.View`
  width: 250px;
  height: 250px;
  justify-content: space-around;
  align-items: center;
`;
