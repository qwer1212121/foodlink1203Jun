import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,  // For better spacing at the top
  },
  
  // Back button styles (positioned to the top-left and made smaller)
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    backgroundColor: '#2D754E',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Back button text style (this won't be used, since we are using an icon)
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Chat list styles
  chatList: {
    padding: 10,
  },
  chatItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  chatContent: {
    flexDirection: 'column',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatLastMessage: {
    fontSize: 14,
    color: '#777',
  },

  // Messages container styles
  messageList: {
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  selfMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#2D754E',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F2F3F7',
  },
  messageText: {
    color: 'white',
  },

  // Input container styles
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#2D754E',
    borderRadius: 20,
    color: 'white',
  },
});

export default styles;
