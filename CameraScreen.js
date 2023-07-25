import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomButtons from './BottomButtons';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const CameraScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleTakePhoto = () => {
    // Implement your logic for taking a photo here
    console.log('Take photo button pressed');
  };

  return (
    <View style={styles.container}>
      <Text>Camera Screen</Text>
      <BottomButtons
        onCameraPress={() => handleTakePhoto()}
        onViewMapPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CameraScreen;
