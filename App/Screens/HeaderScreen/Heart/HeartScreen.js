import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>전체 서비스</Text>
      </View>

      {/* 콘텐츠 영역 */}
      <View style={styles.content}>
        <Text style={styles.text}>
          좋아요한 항목을 여기에 표시합니다.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // 배경색
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff', // 헤더 배경색
  },
  backButton: {
    padding: 8, // 클릭 영역 확장
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    textAlign: 'center', // 텍스트 중앙 정렬
  },
});

export default HeartScreen;
