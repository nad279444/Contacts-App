import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="HomePage"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="LandingPage"
          component={LandingScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'white'
          }}
          name="Sign In"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: 'red'
            },
            headerTintColor: 'white'
          }}
          name="Register"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
