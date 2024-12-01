import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "../../../styles/RecipeCommunity/ModifyCmPost.style";
import NavigateBefore from "../../../components/NavigateBefore"; // NavigateBefore 컴포넌트

const ModifyCmPost = ({ navigation }) => {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <NavigateBefore onPress={() => navigation.goBack()} />
        <Text style={styles.title}>게시물 수정</Text>
        <View style={styles.emptySpace} />
      </View>

      

      {/* 수정 제목 섹션 */}
      <View style={styles.inputSection}>
        <Text style={styles.labelText}>제목을 작성해주세요.</Text>
        <TextInput style={styles.inputBox} placeholder="제목을 입력하세요" />
      </View>

      
      {/* 수정 글 섹션 */}
      <View style={styles.inputSection}>
        <Text style={styles.labelText}>글을 작성해주세요.</Text>
        <TextInput
          style={styles.textArea}
          placeholder="사기 등 위법행위에 대한 작성은 Food Link 이용을 제재 당할 수 있습니다."
          multiline
        />
      </View>

        {/* 저장하기 버튼 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}
            onPress={() => navigation.navigate("Page")}>
            <Text style={styles.submitButtonText}>저장하기</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};
  export default ModifyCmPost;
