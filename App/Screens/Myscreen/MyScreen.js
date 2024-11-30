import React, { useState } from "react";
import { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "../../styles/MyScreen.style";
import { MaterialIcons } from "@expo/vector-icons";
import { PostContext } from "../../PostContext";
const MyScreen = ({ navigation }) => {
  const [rating, setRating] = useState(4); // 초기 별점 설정
  const { posts } = useContext(PostContext); // PostContext에서 posts 가져오기

  // 내 포스트 버튼 클릭
  const handleEdit = () => {
    navigation.navigate("MyPostWrite"); // 네비게이션 이동
  };
  const MyScreen = ({ navigation }) => {
    const { posts } = useContext(PostContext); // posts 불러오기
  
  // 나머지 코드는 동일
const newPost = {
      image
    };

    addPost(newPost); // Context에 추가
    navigation.goBack(); // MyScreen으로 돌아가기
  };

  // 삭제 버튼 클릭
  const handleDelete = () => {
    Alert.alert("삭제 버튼 클릭", "삭제 기능 구현 예정");
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileCard}>
          {/* 사용자 프로필 이미지 */}
          <Image
            source={require("../../../start-expo/assets/avatar.png")}
            style={styles.profileImage}
          />
          {/* 배출 절감 메시지 */}
          <Text style={styles.profileText}>
            <Text style={styles.highlightText}>동길님</Text>
            <Text>의 나눔으로{"\n"} 500g의 CO</Text>
            <Text style={styles.smallText}>2</Text>
            <Text> 배출을 절감했습니다.</Text>
          </Text>
          {/* 별점 및 버튼 섹션 */}
          <View style={styles.actionRow}>
            {/* 수정 버튼 */}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleEdit}
            >
              <MaterialIcons
                name="edit"
                style={styles.actionButtonIcon}
              />
            </TouchableOpacity>

            {/* 별점 */}
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((value) => (
                <TouchableOpacity
                  key={value}
                  onPress={() => handleRating(value)}
                >
                  <MaterialIcons
                    name={value <= rating ? "star" : "star-border"}
                    size={30}
                    color="#FFD700" // 금색
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* 삭제 버튼 */}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleDelete}
            >
              <MaterialIcons
                name="delete"
                style={styles.actionButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        <ScrollView contentContainerStyle={styles.gridContainer}>
          {posts.map((post, index) => (
            <TouchableOpacity key={index} style={styles.gridItem}
            onPress={() => navigation.navigate("FeedScreen", { post })} //add 
            > 
              
              {/* 이미지 렌더링 */}
              {post.images && post.images[0] && (
                <Image
                  source={{ uri: post.images[0] }}
                  style={styles.gridImage}
                />
              )}
           
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyScreen;
