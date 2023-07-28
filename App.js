import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './CameraScreen';
import MapViewScreen from './MapViewScreen';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      // Get current user location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {({ navigation }) => ( // Add navigation prop here
            <MapViewScreen navigation={navigation} location={location} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}