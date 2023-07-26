import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';

const VenueDetailsView = ({ selectedVenue }) => {
  if (!selectedVenue) return null;

  const handleViewChat = (venue) => {
    // Navigate to the chat screen or perform any other action here
    // For example, you can use the navigation prop to navigate to another screen:
    // navigation.navigate('ChatScreen', { venue });
  };

  // Get the screen height
  const screenHeight = Dimensions.get('window').height;

  // Calculate the height of the sheet as 45% of the screen height
  const sheetHeight = screenHeight * 0.45;

  // You can customize the view to display the details of the selected venue
  return (
    <View style={[styles.container, { bottom: 0, height: sheetHeight }]}>
      <Text style={styles.title}>{selectedVenue.name}</Text>
      <Text style={styles.address}>{selectedVenue.vicinity}</Text>

      {/* "Live Chat" text */}
      <Text style={styles.liveChatText}>Live Chat</Text>

      <Image source={require('./assets/chat.jpg')} style={styles.chatImage} />

      <View style={styles.buttonContainer}>
        {/* Add the "View Chat" button */}
        <TouchableOpacity style={styles.chatButton} onPress={() => handleViewChat(selectedVenue)}>
          <Text style={styles.chatButtonText}>View Chat</Text>
        </TouchableOpacity>

        {/* Spacer */}
        <View style={{ flex: 1 }} />

        {/* Upload icon */}
        <TouchableOpacity style={styles.uploadButton}>
          {/* Use the Image component to display the upload icon */}
          <Image source={require('./assets/upload-icon.png')} style={styles.uploadIcon} />
        </TouchableOpacity>
      </View>

      {/* Add more details or components as needed */}
    </View>
  );
};

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    marginTop: 8,
    color: '#888',
  },
  liveChatText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row', // Use flexDirection 'row' for horizontal alignment
    alignItems: 'center', // Align items in the center vertically
    bottom: 10,
    left: 16,
    right: 16,
  },
  chatButton: {
    backgroundColor: 'blue',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10, // Add some spacing between the buttons
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chatImage: {
    width: 200,
    height: 200,
  },
  uploadButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  uploadIcon: {
    width: 24,
    height: 24,
  },
};

export default VenueDetailsView;
