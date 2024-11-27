import React, { useState } from "react";
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

const MyScreen = () => {
  const [rating, setRating] = useState(4);


  const handleRating = (value) => {
    setRating(value);
  };

  const handleEdit = () => {
    Alert.alert("수정 버튼 클릭", "수정 기능 구현 예정");
  };

  const handleDelete = () => {
    Alert.alert("삭제 버튼 클릭", "삭제 기능 구현 예정");
  };


  const posts = Array(12).fill("게시물");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.profileCard}>
     
          <Image
            source={require("../../../start-expo/assets/avatar.png")}
            style={styles.profileImage}
          />
      
          <Text style={styles.profileText}>
            <Text style={styles.highlightText}>동길님</Text>
            <Text>의 나눔으로{"\n"} 500g의 CO</Text>
            <Text style={styles.smallText}>2</Text>
            <Text> 배출을 절감했습니다.</Text>
          </Text>
       
          <View style={styles.actionRow}>
    
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleEdit}
            >
              <MaterialIcons
                name="edit"
                style={styles.actionButtonIcon}
                color="#4CAF50" 
              />
            </TouchableOpacity>

            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((value) => (
                <TouchableOpacity
                  key={value}
                  onPress={() => handleRating(value)}
                >
                  <MaterialIcons
                    name={value <= rating ? "star" : "star-border"}
                    size={30}
                    color="#FFD700" 
                  />
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleDelete}
            >
              <MaterialIcons
                name="delete"
                style={styles.actionButtonIcon}
                color="#F44336" 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.separator} />

        <ScrollView
          contentContainerStyle={styles.gridContainer}
        >
          {posts.map((post, index) => (
            <TouchableOpacity key={index} style={styles.gridItem}>
              <Text style={styles.gridText}>
                {post} {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyScreen;
