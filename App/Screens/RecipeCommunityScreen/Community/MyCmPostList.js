import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅
import CmPost from "../Community/CmPost"; // CmPost 컴포넌트
import { styles } from "../../../styles/RecipeCommunity/MyCmPostList.style";

const MyCmPostList = () => {
  const navigation = useNavigation(); // navigation 객체 가져오기

  // 예시 데이터
  const posts = Array(2).fill({
    title: "제목",
    content: "게시물 내용",
    distance: "3km",
    time: "3일전",
    comments: 2,
    likes: 7,
  });

  const renderItem = ({ item }) => (
    <CmPost
      {...item}
      onPress={() => navigation.navigate("CmPostChat", item)}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MyCmPostList;
