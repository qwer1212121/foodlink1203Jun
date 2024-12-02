import React from "react";
import { FlatList, SafeAreaView, Alert, ActionSheetIOS } from "react-native";
import CmPost from "../Community/CmPost"; // CmPost 컴포넌트
import { styles } from "../../../styles/RecipeCommunity/CmPostList.style";

// 고유 ID를 생성하는 함수
const generateId = () => Math.random().toString(36).substr(2, 9);

const CmPostList = ({ navigation }) => {
  // 예시 데이터
  const posts = Array(5).fill(null).map(() => ({
    id: generateId(), // 고유 ID 생성
    title: "제목",
    content: "게시물 내용",
    distance: "3km",
    time: "3일전",
    comments: 2,
    likes: 7,
  }));

  // 옵션 버튼 핸들러
  const handleOptionsPress = (post) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["게시글 수정", "삭제", "닫기"],
        destructiveButtonIndex: 1, // "삭제"를 빨간색으로 표시
        cancelButtonIndex: 2, // "닫기" 버튼의 인덱스
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          navigation.navigate("ModifyCmPost", { post }); // 게시물 수정 화면으로 이동
        } else if (buttonIndex === 1) {
          Alert.alert(
            "게시물 삭제",
            "정말로 삭제하시겠습니까?",
            [
              { text: "취소", style: "cancel" },
              {
                text: "삭제",
                onPress: () => console.log(`게시물 ${post.title} 삭제됨`),
              },
            ],
            { cancelable: true }
          );
        }
      }
    );
  };

  // 게시물 렌더링
  const renderItem = ({ item }) => (
    <CmPost
      {...item}
      onPress={() => navigation.navigate("CmPostChat", item)}
      onOptionsPress={() => handleOptionsPress(item)} // 옵션 버튼 핸들러 전달
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id} // 고유 ID를 키로 설정
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CmPostList;
