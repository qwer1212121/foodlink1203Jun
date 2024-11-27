import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import screenStyles from '../styles/screen.style';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={screenStyles.scrollContainer}>
      <Text style={styles.title}>홈 화면</Text>
      <Text style={styles.subtitle}>카테고리를 선택하거나, 상단 메뉴를 탐색하세요.</Text>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 16, color: '#555', textAlign: 'center', marginTop: 20 },
});

export default HomeScreen;
