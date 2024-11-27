import React from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import styles from './Chat.Styles';  // ChatStyles.js 경로를 임포트
import Ionicons from 'react-native-vector-icons/Ionicons';  // Ionicons 임포트

const ChatRoom = ({ messages, input, setInput, handleSendMessage, setCurrentRoomId, userId }) => {
  return (
    <View style={styles.container}>
      {/* Back to Chat List Button at the top-left */}
      <TouchableOpacity 
        onPress={() => setCurrentRoomId(null)} 
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === userId ? styles.selfMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messageList}
      />

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default ChatRoom;
