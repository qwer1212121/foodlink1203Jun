import React from "react";
import { FlatList, View, SafeAreaView } from "react-native";
import Post from "./Post"; // Post 컴포넌트 임포트
import { styles } from "./PostList.style";

const PostList = () => {
  // 예시 데이터
  const posts = Array(8).fill({
    title: "불닭소스 필요하신 분?",
    price: "2,000원",
    distance: "12km",
    time: "3일 전",
    comments: 3,
    likes: 11,
  });

  // 렌더링할 아이템
  const renderItem = ({ item }) => <Post {...item} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()} // 고유 키 설정
        renderItem={renderItem} // Post 컴포넌트를 렌더링
        showsVerticalScrollIndicator={false} // 스크롤바 숨김
        contentContainerStyle={styles.listContent} // 리스트 스타일
      />
    </SafeAreaView>
  );
};

export default PostList;
