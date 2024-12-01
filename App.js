import React from "react";
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
import SignUpmodify from "./App/Screens/Modify/SignUpmodify";
import Locationmodify from "./App/Screens/Modify/Locationmodify";
import AlarmScreen from "./App/Screens/HeaderScreen/Alarm/AlarmScreen";
import FeedScreen from "./App/post/FeedScreen";
import Post from "./App/Post";
import MyScreen from "./App/Screens/Myscreen/MyScreen"; // MyScreen import
import MyPostWrite from "./App/MyPostWrite"; // MyPostWrite import
import { PostProvider } from "./App/PostContext"; // PostProvider import
import BoardScreen from "./App/Board/BoardScreen";
import MyPostModify from "./App/MyPostModify";
import MyIngredientsScreen from "./App/Screens/RecipeCommunityScreen/Ingredients/MyIngredientsScreen";
import IngredientDetailScreen from "./App/Screens/RecipeCommunityScreen/Ingredients/IngredientDetailScreen";
import RecipeDetailScreen from "./App/Screens/RecipeCommunityScreen/Ingredients/RecipeDerailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PostProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{ headerShown: false }}
        >
          {/* 기존 Stack Screens */}
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
          <Stack.Screen name="SignUpmodify" component={SignUpmodify} />
          <Stack.Screen name="Locationmodify" component={Locationmodify} />
          <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
          <Stack.Screen name="Post" component={Post} />

          {/* 새로 추가된 Screens */}
          <Stack.Screen name="MyScreen" component={MyScreen} />
          <Stack.Screen name="MyPostWrite" component={MyPostWrite} />
          <Stack.Screen name="FeedScreen" component={FeedScreen} />
          <Stack.Screen name="BoardScreen" component={BoardScreen} />
          <Stack.Screen name="MyPostModify" component={MyPostModify} />
          <Stack.Screen name="MyIngredientsScreen" component={MyIngredientsScreen} />
          <Stack.Screen name="IngredientDetailScreen" component={IngredientDetailScreen} />
          <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  </PostProvider>
  );
}
