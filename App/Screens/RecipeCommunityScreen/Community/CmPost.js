import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../../styles/RecipeCommunity/CmPost.style";

const CmPost = ({ title, content, distance, time, likes, comments, onPress, onOptionsPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* 게시물 제목과 옵션 버튼 */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onOptionsPress} style={styles.optionsButton}>
          <MaterialIcons name="more-vert" size={15} color="#8C8C8C" />
        </TouchableOpacity>
      </View>

      {/* 게시물 내용 */}
      <Text style={styles.content}>{content}</Text>

      {/* 게시물 정보 */}
      <View style={styles.infoContainer}>
        <MaterialIcons name="location-on" size={12} color="#8C8C8C" />
        <Text style={styles.infoText}>{distance}</Text>
        <Text style={styles.infoSeparator}>·</Text>
        <Text style={styles.infoText}>{time}</Text>
      </View>

      {/* 좋아요 및 댓글 */}
      <View style={styles.actionsContainer}>
        <View style={styles.action}>
          <MaterialIcons name="favorite-border" size={16} color="#8C8C8C" />
          <Text style={styles.actionText}>{likes}</Text>
        </View>
        <View style={styles.action}>
          <MaterialIcons name="chat-bubble-outline" size={16} color="#8C8C8C" />
          <Text style={styles.actionText}>{comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CmPost;
