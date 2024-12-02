import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { styles } from "../styles/LoginScreen.style";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>🍴FoodLink🍴</Text>
          <Text style={styles.subtitle}>로그인</Text>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../../start-expo/assets/avatar.png")}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* Body Section */}
        <View style={styles.body}>
          {/* 아이디 입력 필드 */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="ID"
              placeholderTextColor="#2d754e"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          {/* 비밀번호 입력 필드 */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#2d754e"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {/* 로그인 버튼 */}
          <TouchableOpacity style={styles.loginButton}
            onPress={() => navigation.navigate("NewHomeScreen")}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>

          {/* 회원가입 버튼 */}
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpButtonText} >Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

