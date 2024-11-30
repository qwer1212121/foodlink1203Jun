import React from "react";
import { View, Text } from "react-native";

const PostDescription = ({ description, styles }) => (
  <View style={styles.descriptionSection}>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default PostDescription;
