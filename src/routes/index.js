import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from ".././screens/home";
import Details from ".././screens/details";
import User from ".././screens/user";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="StackHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="StackHome" component={Home} />
      <HomeStack.Screen name="StackDetails" component={Details} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      initialRouteName="SettingsHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="SettingsHome" component={Home} />
      <SettingsStack.Screen name="SettingsProfile" component={User} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "User") {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="User" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
