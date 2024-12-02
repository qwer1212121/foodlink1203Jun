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
import { styles } from "../../../styles/RecipeCommunity/ModfiyRecipe.style"
import NavigateBefore from "../../../components/NavigateBefore"; // NavigateBefore 컴포넌트
import * as ImagePicker from "expo-image-picker"; // 이미지 추가 라이브러리

const ModifyRecipe = ({ navigation }) => {
  const [images, setImages] = useState(Array(5).fill(null)); // 사진 상태

  // 이미지 추가 핸들러
  const handleAddImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("권한 필요", "사진 라이브러리 접근 권한이 필요합니다.");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!pickerResult.cancelled) {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const emptyIndex = newImages.indexOf(null);
        if (emptyIndex !== -1) {
          newImages[emptyIndex] = pickerResult.uri;
        } else {
          Alert.alert("슬롯 초과", "더 이상 이미지를 추가할 수 없습니다.");
        }
        return newImages;
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <NavigateBefore onPress={() => navigation.goBack()} />
        <Text style={styles.title}>레시피 수정</Text>
        <View style={styles.emptySpace} />
      </View>

      {/* 이미지 추가 섹션 */}
      <View style={styles.imageSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recipeImagesContainer}
        >
          <TouchableOpacity style={styles.addImageBox} onPress={handleAddImage}>
            <Text style={styles.addImageText}>+</Text>
          </TouchableOpacity>
          {images.map((uri, index) => (
            <View
              key={index}
              style={[
                styles.recipeImagePlaceholder,
                !uri && { backgroundColor: "#F2F3F6" },
              ]}
            >
              {uri && <Image source={{ uri }} style={styles.recipeImage} />}
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 제목 섹션 */}
      <View style={styles.inputSection}>
        <Text style={styles.labelText}>제목을 작성해주세요.</Text>
        <TextInput style={styles.inputBox} placeholder="제목을 입력하세요" />
      </View>

      {/* 재료 섹션 */}
      <View style={styles.inputSection}>
        <Text style={styles.labelText}>재료를 작성해주세요.</Text>
        <TextInput style={styles.inputBox} placeholder="재료를 입력하세요" />
      </View>
      
      {/* 조리 순서 섹션 */}
      <View style={styles.inputSection}>
        <Text style={styles.labelText}>조리순서를 작성해주세요.</Text>
        <TextInput
          style={styles.textArea}
          placeholder="허위 식자재와 사기 등 위법행위에 대한 작성은 Food Link를 이용 제재 당할 수 있습니다."
          multiline
        />
      </View>

        {/* 추가하기 버튼 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.submitButtonText}>수정하기</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ModifyRecipe;
