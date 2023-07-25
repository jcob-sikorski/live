import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BottomButtons = ({ onCameraPress, onViewMapPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cameraButton} onPress={onCameraPress}>
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewMapButton} onPress={onViewMapPress}>
        <Text>View Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
  },
  cameraButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  viewMapButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
  },
});

export default BottomButtons;
