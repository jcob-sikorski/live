import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
import BottomButtons from './BottomButtons'; // Import the BottomButtons component
import { StyleSheet, Dimensions } from 'react-native';

const MapViewScreen = ({ navigation, location }) => {
  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Location"
            description="This is my current location"
          />
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}
      {/* Include the BottomButtons component */}
      <BottomButtons
        onCameraPress={() => navigation.navigate('Camera')}
        onViewMapPress={() => navigation.navigate('Main')}
      />
      {/* End of BottomButtons */}
      <StatusBar style="auto" />
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapViewScreen;
