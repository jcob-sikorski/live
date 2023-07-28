import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const dummyMessages = [
    { id: '1', text: 'Hello!', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:30:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '2', text: 'Hi there!', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:31:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '3', text: 'How are you?', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:32:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '4', text: 'I am doing great!', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:33:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '5', text: 'Nice to meet you!', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:35:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '6', text: 'Likewise!', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:36:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '7', text: 'What have you been up to?', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:38:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '8', text: 'Just working on some projects.', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:39:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '9', text: 'Sounds interesting!', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:42:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '10', text: 'Yes, it keeps me busy!', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:43:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '11', text: 'Do you have any plans for the weekend?', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:45:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '12', text: 'I am planning to relax and watch some movies.', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:46:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '13', text: 'That sounds like a good plan!', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:48:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '15', text: 'What are your favorite movies?', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:51:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '16', text: 'I enjoy action and sci-fi movies.', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:52:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '17', text: 'Those are great genres!', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:54:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '18', text: 'Yes, they are full of excitement!', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:55:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '19', text: 'Anyway, I have to go now.', sender: 'user', nick: 'John', timestamp: '2023-07-26T12:57:00', userIcon: require('./assets/user-icon.jpg') },
    { id: '20', text: 'Sure, take care!', sender: 'bot', nick: 'Bot', timestamp: '2023-07-26T12:58:00', userIcon: require('./assets/user-icon.jpg') },
  ];

  const ChatScreen = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={dummyMessages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
              <View style={styles.messageHeader}>
                <Image source={item.userIcon} style={styles.userIcon} />
                <Text style={styles.nick}>{item.nick}</Text>
                <Text style={[styles.timestamp, item.sender === 'user' ? styles.user_timestamp : styles.bot_timestamp]}>
                  {formatTimestamp(item.timestamp)}
                </Text>
              </View>
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
    );
  };

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedTimestamp = `${date.toDateString()} ${hours}:${minutes}`;
  return formattedTimestamp;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 32,
      backgroundColor: '#161618',
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: 'blue',
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    },
    botMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#FFF',
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    },
    messageHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    userIcon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    nick: {
      fontWeight: 'bold',
      marginRight: 8,
      color: 'white', // Set the font color of the user nick to white
    },
    user_timestamp: {
      color: 'white', // Set the font color of the timestamp to white
    },
    bot_timestamp: {
        color: 'black', // Set the font color of the timestamp to white
      },
  });
  

export default ChatScreen;
