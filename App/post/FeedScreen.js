import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import PostHeader from "../post/PostHeader";
import PostDescription from "../post/PostDescription";
import styles from "../post/FeedScreen.style";
import FavoriteBox from "../components/FavoriteBox";

const FeedScreen =  ({ route, navigation }) => {
	const { post } = route.params;
	const [showFavoriteBox, setShowFavoriteBox] = useState(false);
	const [feedbackMessage, setFeedbackMessage] = useState("");
  

	const calculateTimeAgo = (createdAt) => {
		const now = new Date();
		const postDate = new Date(createdAt);
		const diffInSeconds = Math.floor((now - postDate) / 1000);
	
		if (diffInSeconds < 60) return `방금 전`;
		if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
		if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간 전`;
		return `${Math.floor(diffInSeconds / 86400)}일 전`;
	  };
	
	  const handleFavorite = (action) => {
		setShowFavoriteBox(false);
		setFeedbackMessage(action === "confirm" ? "이 게시물을 찜하셨습니다" : "취소되었습니다");
		setTimeout(() => setFeedbackMessage(""), 3000);
	  };
	  return (
		<SafeAreaView style={styles.container}>
		  {/* 게시물 상단 헤더 */}
		  <PostHeader
			post={post}
			calculateTimeAgo={calculateTimeAgo}
			onBackPress={navigation.goBack}
			styles={styles}
		  />
	
		  {/* 게시물 설명 */}
		  <PostDescription description={post.description} styles={styles} />
	
		  {/* 하단 바 */}
		  <View style={styles.footer}>
			<View style={styles.priceContainer}>
			  <TouchableOpacity
				style={styles.favoriteButton}
				onPress={() => setShowFavoriteBox(true)}
			  >
				<Text style={styles.favoriteIcon}>♥</Text>
			  </TouchableOpacity>
			  <Text style={styles.price}>{post.price?.toLocaleString() || "0"}원</Text>
			</View>
			<TouchableOpacity
				style={styles.chatButton}
				onPress={() =>
					navigation.navigate("MyPostModify", { post }) // 수정하기 버튼 눌렀을 때 이동
				}>
				<Text style={styles.chatButtonText}>수정하기</Text>
        </TouchableOpacity>
		  </View>
	
		  {/* 찜 확인 박스 */}
		  {showFavoriteBox && (
			<FavoriteBox
			  onConfirm={() => handleFavorite("confirm")}
			  onCancel={() => handleFavorite("cancel")}
			  styles={styles}
			/>
		  )}
		</SafeAreaView>
	  );
	};
export default FeedScreen;

