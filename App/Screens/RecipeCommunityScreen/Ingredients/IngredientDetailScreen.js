import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import NavigateBefore from "../../../components/NavigateBefore"; // NavigateBefore 컴포넌트 가져오기
import { fetchRecipeForIngredient, fetchRecipeDetail } from "../../../services/recipeService"; // MealDB API
import { detectIngredients } from "../../../services/awsService"; // AWS Rekognition 서비스
import styles from "./IngredientDetailScreen.style"; // 스타일 가져오기

const IngredientDetailScreen = ({ route, navigation }) => {
  const { item } = route.params; // 전달된 데이터 받기
  const [detectedIngredients, setDetectedIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const detectAndFetchRecipes = async () => {
    try {
      setLoading(true);
      const detected = await detectIngredients(item.url);
      if (!detected.length) {
        Alert.alert("식자재 감지 실패", "이미지에서 식자재를 감지할 수 없습니다.");
        return;
      }

      setDetectedIngredients(detected);
      setSelectedIngredient(detected[0]);
      const fetchedRecipes = await fetchRecipeForIngredient(detected[0]);
      setRecipes(fetchedRecipes || []);
    } catch (err) {
      console.error("오류:", err);
      Alert.alert("오류", "레시피를 가져오는 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomRecipes = async () => {
    try {
      setLoading(true);
      const randomRecipesList = [];
      for (let i = 0; i < 5; i++) {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        randomRecipesList.push(data.meals[0]);
      }
      setRandomRecipes(randomRecipesList);
    } catch (err) {
      console.error("오늘의 레시피 가져오기 오류:", err);
      Alert.alert("오류", "오늘의 레시피를 가져오는 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleRecipePress = async (idMeal) => {
    try {
      const recipeDetail = await fetchRecipeDetail(idMeal);
      if (recipeDetail) {
        navigation.navigate("RecipeDetailScreen", { recipe: recipeDetail });
      } else {
        Alert.alert("오류", "레시피 상세 정보를 가져올 수 없습니다.");
      }
    } catch (err) {
      console.error("레시피 상세 정보 가져오기 오류:", err);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <NavigateBefore onPress={() => navigation.goBack()} />
          <Text style={styles.title}>AI가 추천하는 레시피</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </View>

          <View style={styles.detailContainer}>
            <Text style={styles.description}>
              AI가 감지한 식자재로 레시피를 확인해보세요!
            </Text>

            <TouchableOpacity
              style={[styles.toggleButton, loading && { backgroundColor: "#ccc" }]}
              onPress={detectAndFetchRecipes}
              disabled={loading}
            >
              <Text style={styles.toggleButtonText}>레시피 추천 받기</Text>
            </TouchableOpacity>

            {loading && <ActivityIndicator size="large" color="#2D754E" />}

            {recipes.map((recipe) => (
              <TouchableOpacity
                key={recipe.idMeal}
                style={styles.recipeItem}
                onPress={() => handleRecipePress(recipe.idMeal)}
              >
                <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
                <View style={styles.recipeDetails}>
                  <Text style={styles.recipeName}>{recipe.strMeal}</Text>
                  <Text style={styles.recipeDescription}>레시피를 확인하려면 클릭하세요</Text>
                </View>
              </TouchableOpacity>
            ))}

            <View style={styles.separator}>
              <Text style={styles.separatorText}>--- 오늘의 레시피 추천 ---</Text>
            </View>

            {randomRecipes.map((recipe) => (
              <TouchableOpacity
                key={recipe.idMeal}
                style={styles.recipeItem}
                onPress={() => handleRecipePress(recipe.idMeal)}
              >
                <Image source={{ uri: recipe.strMealThumb }} style={styles.recipeImage} />
                <View style={styles.recipeDetails}>
                  <Text style={styles.recipeName}>{recipe.strMeal}</Text>
                  <Text style={styles.recipeDescription}>레시피를 확인하려면 클릭하세요</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default IngredientDetailScreen;
