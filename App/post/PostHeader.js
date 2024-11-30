import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const PostHeader = ({ post, calculateTimeAgo, onBackPress, styles }) => (
  <View style={styles.content}>
    <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Text style={styles.backText}>←</Text>
    </TouchableOpacity>
    <Image source={{ uri: post.images[0] }} style={styles.postImage} />
    <View style={styles.titleSection}>
      <View style={styles.titleHeader}>
        <View style={styles.categoryDot} />
        <Text style={styles.title}>{post.title}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.category}>{post.category}</Text>
        <Text style={styles.timeAgo}>{calculateTimeAgo(post.createdAt)}</Text>
      </View>
    </View>
  </View>
);

export default PostHeader;
