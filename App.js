import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./App/components/TabNavigator";
import CategoryScreen from "./App/Screens/HeaderScreen/Category/CategoryScreen";
import HeartScreen from "./App/Screens/HeaderScreen/Heart/HeartScreen";
import IfmScreen from "./App/Screens/HeaderScreen/Ifm/IfmScreen";
import LoginScreen from "./App/Screens/LoginScreen";
import SignUp from "./App/Screens/SignUp";
import LocationScreen from "./App/Screens/LocationScreen";
import HomeScreen from "./App/Screens/HomeScreen";
import CustomHeader from "./App/components/CustomHeader";
import NewHomeScreen from "./App/Screens/NewHomeScreen";
import BoardScreen from "./App/Screens/BoardScreen";
import SignUpmodify from "./App/Screens/Modify/SignUpmodify";
import Locationmodify from "./App/Screens/Modify/Locationmodify";
import AlarmScreen from "./App/Screens/HeaderScreen/Alarm/AlarmScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen" 
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="HeartScreen" component={HeartScreen} />
        <Stack.Screen name="IfmScreen" component={IfmScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CustomHeader" component={CustomHeader} />
        <Stack.Screen name="NewHomeScreen" component={NewHomeScreen} />
        <Stack.Screen name="BoardScreen" component={BoardScreen} />
        <Stack.Screen name="SignUpmodify" component={SignUpmodify} />
        <Stack.Screen name="Locationmodify" component={Locationmodify}/>
        <Stack.Screen name="AlarmScreen" component={AlarmScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
