import React, { useEffect, useState, useContext } from "react";
import {
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./BoardScreen.style";
import { PostContext } from "../PostContext";

const BoardScreen = ({ navigation, route }) => {
  const { posts: contextPosts, addFavorite, removeFavorite, favorites } =
    useContext(PostContext); // favorites 추가
  const [posts, setPosts] = useState(contextPosts);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPosts(contextPosts);
  }, [contextPosts]);

  useEffect(() => {
    if (route.params?.newPost) {
      setPosts((prevPosts) => [route.params.newPost, ...prevPosts]);
      navigation.setParams({ newPost: null });
    }
  }, [route.params?.newPost]);

  const handleDelete = (postId) => {
    Alert.alert("삭제 확인", "이 게시물을 정말 삭제하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        style: "destructive",
        onPress: () => {
          setPosts(posts.filter((post) => post.id !== postId));
        },
      },
    ]);
  };

  const handlePostPress = (post) => {
    navigation.navigate("FeedScreen", { post });
  };

  const handleFavorite = (post) => {
    if (!favorites.some((fav) => fav.id === post.id)) {
      addFavorite(post);
      Alert.alert("찜하기 성공", "찜한 게시물에 추가되었습니다.");
    } else {
      Alert.alert("중복!", "이미 찜한 게시물입니다.");
    }
  };

  const handleRemoveFavorite = (postId) => {
    Alert.alert("삭제 확인", "이 게시물을 찜 목록에서 삭제하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "삭제",
        onPress: () => {
          removeFavorite(postId);
          Alert.alert("찜 삭제 성공!", "찜한 게시물이 삭제되었습니다.");
        },
        style: "destructive",
      },
    ]);
  };

  // 제목이 undefined일 경우를 처리하여 필터링
  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || false
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredPosts}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePostPress(item)}>
            <Post
              item={item}
              onEdit={() =>
                navigation.navigate("EditPostScreen", { post: item })
              }
              onDelete={handleDelete}
              onFavorite={() => handleFavorite(item)}
              onRemoveFavorite={() => handleRemoveFavorite(item.id)}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const Post = ({ item, onEdit, onDelete, onFavorite, onRemoveFavorite }) => {
  const calculateTimeAgo = (createdAt) => {
    const now = new Date();
    const postDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 60) return `1분 전`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    return `${Math.floor(diffInSeconds / 86400)}일 전`;
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        {item.images?.length > 0 ? (
          <Image
            source={{ uri: item.images[0] }}
            style={styles.imagePlaceholder}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.statusIndicator} />
          <Text style={styles.title}>{item.title || "제목 없음"}</Text>
        </View>

        <View style={styles.infoContainer}>
          <MaterialIcons name="location-on" size={12} color="#8C8C8C" />
          <Text style={styles.infoText}>12km</Text>
          <Text style={styles.infoSeparator}>·</Text>
          <Text style={styles.infoText}>{calculateTimeAgo(item.createdAt)}</Text>
        </View>

        <Text style={styles.price}>{item.price || "가격 없음"}원</Text>

        <View style={styles.actionsContainer}>
         
          {onFavorite && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => onFavorite(item)}
            >
              <MaterialIcons name="favorite" size={16} color="#F44336" />
              <Text style={styles.actionText}>찜</Text>
            </TouchableOpacity>
          )}
      
        </View>
      </View>
    </View>
  );
};

export default BoardScreen;
