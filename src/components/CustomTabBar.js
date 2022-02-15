import React from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

const TabArea = styled.View`
  height: 50px;
  background-color: #f2f2f2;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({ state, navigation }) => {
  return (
    <TabArea>
      <TabItem onPress={() => navigation.navigate("Home")}>
        <FontAwesome5
          name="home"
          size={24}
          color="#A6A297"
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
        />
      </TabItem>
      <TabItem onPress={() => navigation.navigate("Search")}>
        <FontAwesome5
          name="search"
          size={24}
          color="#A6A297"
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
        />
      </TabItem>
    </TabArea>
  );
};
