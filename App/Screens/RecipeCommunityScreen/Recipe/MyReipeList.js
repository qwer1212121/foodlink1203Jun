import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActionSheetIOS,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅 임포트

// 고유 ID를 생성하는 함수
const generateId = () => Math.random().toString(36).substr(2, 9);

const MyRecipeList = () => {
  const navigation = useNavigation(); // navigation 객체 가져오기

  // 레시피 데이터
  const recipes = Array(8).fill(null).map(() => ({
    id: generateId(), // 고유 ID 생성
    uri: null,
    title: "레시피 제목",
    author: "작성자",
  }));

  // 옵션 버튼 핸들러
  const showOptions = (recipe) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["게시글 수정", "삭제", "닫기"],
        destructiveButtonIndex: 1, // "삭제"를 빨간색으로 표시
        cancelButtonIndex: 2, // "닫기" 버튼의 인덱스
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // 수정 화면으로 이동
          navigation.navigate("ModifyRecipe", { recipe }); // recipe 데이터 전달
        } else if (buttonIndex === 1) {
          Alert.alert(
            "게시물 삭제",
            "정말로 삭제하시겠습니까?",
            [
              { text: "취소", style: "cancel" },
              {
                text: "삭제",
                onPress: () => console.log(`레시피 ${recipe.title} 삭제됨`),
              },
            ],
            { cancelable: true }
          );
        }
      }
    );
  };

  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.id} // 고유 ID를 키로 설정
      numColumns={2}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <View style={styles.recipeCard}>
          <View style={styles.recipeImage}>
            {item.uri ? (
              <Image source={{ uri: item.uri }} style={styles.image} />
            ) : (
              <View style={styles.placeholderImage}>
                <Text style={styles.placeholderText}>이미지 없음</Text>
              </View>
            )}
          </View>
          <View style={styles.recipeInfo}>
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <Text style={styles.recipeAuthor}>{item.author}</Text>
            <TouchableOpacity
              style={styles.optionsButton}
              onPress={() => showOptions(item)}
            >
              <MaterialIcons name="more-vert" size={14} color="#8E8E8E" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between", // 각 열의 아이템 사이 간격
    marginBottom: 10,
  },
  recipeCard: {
    flex: 1, // 2열로 나누기 위해 flex를 1로 설정
    marginHorizontal: 5, // 카드 간격
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2, // 그림자 효과 (Android)
    shadowColor: "#000", // 그림자 효과 (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: "relative", // 옵션 버튼 위치 조정을 위해
  },
  recipeImage: {
    width: "100%",
    height: 160,
    backgroundColor: "#F2F3F6", // 회색 배경
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 14,
    color: "#B0B0B0",
  },
  recipeInfo: {
    padding: 10,
    position: "relative",
  },
  recipeTitle: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  recipeAuthor: {
    color: "#8C8C8C",
    fontSize: 12,
    marginBottom: 5,
  },
  optionsButton: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 5,
  },
});

export default MyRecipeList;
