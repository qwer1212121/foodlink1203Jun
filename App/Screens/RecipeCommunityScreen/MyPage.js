import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "../RecipeCommunityScreen/MyPage.style";
import RecipeList from "./RecipeList"; 
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native"; // 네비게이션 훅 가져오기
const MyPage = () => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기
  const [ingredients, setIngredients] = useState(Array(5).fill(null)); 
  const [selectedTab, setSelectedTab] = useState("레시피"); 

  const handleAddImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("권한 필요", "사진 라이브러리 접근 권한이 필요합니다.");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!pickerResult.cancelled) {
      setIngredients((prevIngredients) => {
        const newIngredients = [...prevIngredients];
        const emptyIndex = newIngredients.indexOf(null); 
        if (emptyIndex !== -1) {
          newIngredients[emptyIndex] = pickerResult.uri; 
        } else {
          Alert.alert("슬롯 초과", "더 이상 이미지를 추가할 수 없습니다.");
        }
        return newIngredients;
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.myIngredientsSection}>
        <View style={styles.myIngredientsHeader}>
          <Text style={styles.headerText}>내 식자재</Text>
          {/* 더 보기 버튼 */}
          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => navigation.navigate("MyIngredientsScreen")} // 네비게이션 연결
          >
            <Text style={styles.moreText}>더 보기</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.ingredientsListContainer}
        >
          <TouchableOpacity style={styles.addImageButton} onPress={handleAddImage}>
            <Text style={styles.addImageText}>+</Text>
          </TouchableOpacity>

          {ingredients.map((uri, index) => (
            <View
              key={index}
              style={[
                styles.ingredientImage,
                !uri && { backgroundColor: "#F2F3F6" },
              ]}
            >
              {uri && <Image source={{ uri }} style={styles.ingredientImage} />}
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.boardSection}>

        <View style={styles.boardHeader}>
          <Text style={styles.headerText}>게시판</Text>
          <TouchableOpacity
            style={styles.addPostButton}
            onPress={() => {
              console.log("레시피 추가 버튼 클릭!"); 
            }}
          >
            <Text style={styles.addPostButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boardTabs}>
          <TouchableOpacity
            style={selectedTab === "레시피" ? styles.tabActive : styles.tab}
            onPress={() => setSelectedTab("레시피")}
          >
            <Text
              style={
                selectedTab === "레시피"
                  ? styles.tabActiveText
                  : styles.tabText
              }
            >
              레시피
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedTab === "커뮤니티" ? styles.tabActive : styles.tab}
            onPress={() => setSelectedTab("커뮤니티")}
          >
            <Text
              style={
                selectedTab === "커뮤니티"
                  ? styles.tabActiveText
                  : styles.tabText
              }
            >
              커뮤니티
            </Text>
          </TouchableOpacity>
        </View>

        {selectedTab === "레시피" && (
          <View style={styles.recipeListContainer}>
            <RecipeList />
          </View>
        )}

        {selectedTab === "커뮤니티" && (
          <View style={styles.communityContent}>
            <Text style={styles.communityText}>커뮤니티 내용입니다.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default MyPage;
