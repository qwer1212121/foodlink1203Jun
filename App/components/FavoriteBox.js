import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const FavoriteBox = ({ onConfirm, onCancel, styles }) => (
  <View style={styles.favoriteBox}>
    <Text style={styles.favoriteText}>이 게시물을 찜하시겠습니까?</Text>
    <View style={styles.favoriteButtons}>
      <TouchableOpacity style={styles.favoriteButton} onPress={onCancel}>
        <Text style={styles.favoriteButtonText}>취소</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.favoriteButton} onPress={onConfirm}>
        <Text style={styles.favoriteButtonText}>확인</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default FavoriteBox;
