import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const BoxInput = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

export const TextInput = styled.TextInput`
  width: 200px;
  height: 40px;
  margin-right: 5px;
  background-color: white;
  border-radius: 10px;
  padding: 0 20px;
`;

export const City = styled.Text`
  font-weight: bold;
  color: gray;
  font-size: 24px;
`;

export const Card = styled.View`
  flex: auto;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: #58748c;
  border-radius: 10px;
`;

export const CardWeather = styled.View`
  width: 250px;
  height: 350px;
  margin-top: -120px;
  background-color: white;
  border-radius: 30px;
  justify-content: flex-end;
`;

export const Temp = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 200px;
`;

export const TempMin = styled.View`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;

export const TempInt = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CardWeatherInt = styled.View`
  width: 250px;
  height: 250px;
  justify-content: space-around;
  align-items: center;
`;
