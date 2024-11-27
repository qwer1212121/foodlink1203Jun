import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
//import {
//  fetchPostsFromFirestore,
//  deletePostFromFirestore,
//  addFavoriteToFirestore,
//  deleteFavoriteFromFirestore, // Firestore에서 찜 삭제 함수 추가
//} from "../services/firestoreService";

const Post = ({ item, onEdit, onDelete, onFavorite, onRemoveFavorite }) => {
  const calculateTimeAgo = (createdAt) => {
    const now = new Date();
    const postDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 60) {
      return `${"1"}분 전`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}분 전`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)}일 전`;
    }
  };

  return (
    <View style={styles.container}>
      {/* 이미지 섹션 */}
      <View style={styles.imageContainer}>
        {item.images && item.images.length > 0 ? (
          <Image
            source={{ uri: item.images[0] }}
            style={styles.imagePlaceholder}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
      </View>

      {/* 텍스트 섹션 */}
      <View style={styles.contentContainer}>
        {/* 제목 섹션 */}
        <View style={styles.titleContainer}>
          <View style={styles.statusIndicator} />
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* 정보 섹션 */}
        <View style={styles.infoContainer}>
          <MaterialIcons name="location-on" size={12} color="#8C8C8C" />
          <Text style={styles.infoText}>12km</Text>
          <Text style={styles.infoSeparator}>·</Text>
          <Text style={styles.infoText}>{calculateTimeAgo(item.createdAt)}</Text>
        </View>

        {/* 가격 */}
        <Text style={styles.price}>{item.price}원</Text>

        {/* 액션 버튼 */}
        <View style={styles.actionsContainer}>
          {onEdit && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => onEdit(item)}
            >
              <MaterialIcons name="edit" size={16} color="#8C8C8C" />
              <Text style={styles.actionText}>수정</Text>
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => onDelete(item.id)}
            >
              <MaterialIcons name="delete-outline" size={16} color="#8C8C8C" />
              <Text style={styles.actionText}>삭제</Text>
            </TouchableOpacity>
          )}
          {onFavorite && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => onFavorite(item)}
            >
              <MaterialIcons name="favorite" size={16} color="#F44336" />
              <Text style={styles.actionText}>찜하기</Text>
            </TouchableOpacity>
          )}
          {onRemoveFavorite && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() =>
                Alert.alert(
                  "삭제 확인",
                  "이 게시물을 찜 목록에서 삭제하시겠습니까?",
                  [
                    {
                      text: "취소",
                      style: "cancel",
                    },
                    {
                      text: "확인",
                      onPress: () => onRemoveFavorite(item.id),
                      style: "destructive",
                    },
                  ]
                )
              }
            >
              <MaterialIcons name="delete" size={16} color="#F44336" />
              <Text style={styles.actionText}>찜 삭제</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const BoardScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]); // 모든 게시물
  const [favorites, setFavorites] = useState([]); // 찜한 게시물

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await fetchPostsFromFirestore();
      const processedPosts = fetchedPosts.map((post) => ({
        ...post,
        createdAt: post.createdAt.toDate(),
      }));
      setPosts(processedPosts);
    };

    loadPosts();
  }, []);

  const handleDelete = async (postId) => {
    Alert.alert(
      "삭제 확인",
      "이 게시물을 정말 삭제하시겠습니까?",
      [
        { text: "취소", style: "cancel" },
        {
          text: "삭제",
          style: "destructive",
          onPress: async () => {
            await deletePostFromFirestore(postId);
            setPosts(posts.filter((post) => post.id !== postId));
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleEdit = (post) => {
    navigation.navigate("EditPostScreen", { post });
  };

  const handlePostPress = (post) => {
    navigation.navigate("SungsuScreen", { post }); // 상세 화면으로 이동
  };

  const handleFavorite = async (post) => {
    if (!favorites.some((fav) => fav.id === post.id)) {
      setFavorites([...favorites, post]); // 로컬 favorites 업데이트

      // Firestore에 추가
      try {
        await addFavoriteToFirestore(post);
        Alert.alert("찜하기 성공!", "찜한 게시물에 추가되었습니다.");
      } catch (error) {
        console.error("Firestore 동기화 실패:", error);
        Alert.alert("오류", "찜하기 동작 중 문제가 발생했습니다.");
      }
    } else {
      Alert.alert("중복!", "이미 찜한 게시물입니다.");
    }
  };

  const handleRemoveFavorite = async (postId) => {
    // 로컬 favorites 업데이트
    setFavorites(favorites.filter((fav) => fav.id !== postId));

    // Firestore에서 삭제
    try {
      await deleteFavoriteFromFirestore(postId);
      Alert.alert("찜 삭제 성공!", "찜한 게시물이 삭제되었습니다.");
    } catch (error) {
      console.error("찜 삭제 중 오류 발생:", error);
      Alert.alert("오류", "찜 삭제 중 문제가 발생했습니다.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Text style={styles.sectionHeader}>게시물 목록</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePostPress(item)}>
            <Post
              item={item}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  imageContainer: {
    width: 127,
    height: 109,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  imagePlaceholder: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  statusIndicator: {
    width: 6,
    height: 6,
    backgroundColor: "#B1F47F",
    borderRadius: 3,
  },
  title: {
    flex: 1,
    color: "#521212",
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 18,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 8,
  },
  infoText: {
    color: "#8C8C8C",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16,
  },
  infoSeparator: {
    color: "#8C8C8C",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 16,
  },
  price: {
    color: "#2D754E",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 22,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    color: "#8C8C8C",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default BoardScreen;
