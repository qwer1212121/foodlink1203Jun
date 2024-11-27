import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './Chat.Styles';

const ChatList = ({ chatList, setCurrentRoomId }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => setCurrentRoomId(item.id)}
          >
            <View style={styles.chatContent}>
              <Text style={styles.chatName}>{item.name || 'Chat Room'}</Text>
              <Text style={styles.chatLastMessage}>
                {item.lastMessage || 'No messages yet'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

export default ChatList;
