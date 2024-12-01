import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../styles/RecipeCommunity/CmPostDetail.style";
import { MaterialIcons } from "@expo/vector-icons"; // 올바른 MaterialIcons 가져오기

const CmPostDetail = () => {
  return (
    <View style={styles.postContainer}>
      {/* 작성자 정보 */}
      <View style={styles.authorContainer}>
        <Image
          source={require("../../../../start-expo/assets/avatar.png")}
          style={styles.authorImage}
        />
        <View>
          <Text style={styles.authorName}>동길</Text>
          <Text style={styles.timestamp}>10/9 22:32</Text>
        </View>
      </View>
      <Text style={styles.postTitle}>다들 좋아하시는 음식이 뭔가요?</Text>
      <Text style={styles.postContent}>저는 피자를 가장 좋아해요.</Text>
      <View style={styles.actionContainer}>
        <MaterialIcons name="thumb-up-off-alt" size={16} color="#8C8C8C" />
        <Text style={styles.actionText}>7</Text>
        <MaterialIcons name="chat-bubble-outline" size={16} color="#8C8C8C" />
        <Text style={styles.actionText}>2</Text>
      </View>
    </View>
  );
};

export default CmPostDetail;
