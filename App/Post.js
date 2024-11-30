import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/Post.Styles";

const Post = ({ item, onEdit, onDelete, onFavorite, onRemoveFavorite }) => {
  const calculateTimeAgo = (createdAt) => {
    const now = new Date();
    const postDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 60) return `1분 전`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    return `${Math.floor(diffInSeconds / 86400)}일 전`;
  };
  // item이 정의되어 있는지 체크 (undefined가 아닌지 확인)
  if (!item) {
    return null; // item이 없으면 아무것도 렌더링하지 않음
  }
  return (
    <View style={styles.container}>
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
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <View style={styles.infoContainer}>
          <MaterialIcons name="location-on" size={12} color="#8C8C8C" />
          <Text style={styles.infoText}>12km</Text>
          <Text style={styles.infoSeparator}>·</Text>
          <Text style={styles.infoText}>{calculateTimeAgo(item.createdAt)}</Text>
        </View>

        <Text style={styles.price}>{item.price}원</Text>

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
                Alert.alert("삭제 확인", "찜 목록에서 삭제하시겠습니까?", [
                  { text: "취소", style: "cancel" },
                  {
                    text: "확인",
                    onPress: () => onRemoveFavorite(item.id),
                    style: "destructive",
                  },
                ])
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

export default Post;
