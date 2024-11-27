import React from 'react';
import { ScrollView, Text } from 'react-native';
import screenStyles from '../../styles/screen.style';

const RecipeCommunityScreen = () => {
  return (
    <ScrollView contentContainerStyle={screenStyles.scrollContainer}>
      <Text>레시피, 커뮤니티 화면</Text>
    </ScrollView>
  );
};

export default RecipeCommunityScreen;
