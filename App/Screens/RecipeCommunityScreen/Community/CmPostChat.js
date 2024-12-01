import React from "react";
import { View, TextInput, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "../../../styles/RecipeCommunity/CmPostChat.style";
import NavigateBefore from "../../../components/NavigateBefore";
import CmPostDetail from "../Community/CmPostDetail";
import CommentList from "../Community/CommentList";
import { MaterialIcons } from "@expo/vector-icons";

const CmPostChat = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <NavigateBefore onPress={() => navigation.goBack()} />
        <Text style={styles.title}>커뮤니티</Text>
        <View style={styles.emptySpace} />
      </View>

      {/* 글 디테일 */}
      <CmPostDetail />

      {/* 댓글창 */}
      <CommentList />

      {/* 댓글 입력창 */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="댓글을 입력하세요"
          placeholderTextColor="#8C8C8C"
        />
        
        <MaterialIcons name="send" size={24} color="#2D754E" marginLeft = {14} />
      </View>
    </SafeAreaView>
  );
};
export default CmPostChat;
