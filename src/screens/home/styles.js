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
  background-color: #fff;
  border-radius: 10px;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: #58748c;
  border-radius: 10px;
`;
