import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "../../../styles/RecipeCommunity/CommentList.style";

const CommentList = () => {
  const comments = [
    {
      id: 1,
      name: "이마크 부인",
      timestamp: "10/10 2:17",
      content: "청접장 돌립니다~",
    },
    {
      id: 2,
      name: "니얼굴",
      timestamp: "10/10 2:17",
      content: "저는 마라탕이여",
    },
    {
      id: 3,
      name: "안경젭젭티뷔",
      timestamp: "10/10 2:17",
      content: "니얼굴 이새끼야",
    },
    {
      id: 4,
      name: "이마크 부인",
      timestamp: "10/10 2:17",
      content: "청접장 돌립니다~",
    },
    {
      id: 5,
      name: "이마크 부인",
      timestamp: "10/10 2:17",
      content: "청접장 돌립니다~",
    },
    {
      id: 6,
      name: "이마크 부인",
      timestamp: "10/10 2:17",
      content: "청접장 돌립니다~",
    },
    {
      id: 7,
      name: "이마크 부인",
      timestamp: "10/10 2:17",
      content: "청접장 돌립니다~",
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      {comments.map((comment) => (
        <View key={comment.id} style={styles.commentContainer}>
          <Image
            source={require("../../../../start-expo/assets/avatar.png")}
            style={styles.commentAvatar}
          />
          <View style={styles.commentDetails}>
            <Text style={styles.commentName}>{comment.name}</Text>
            <Text style={styles.commentTimestamp}>{comment.timestamp}</Text>
            <Text style={styles.commentContent}>{comment.content}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default CommentList;
