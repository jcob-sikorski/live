import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './CameraScreen';
import MapViewScreen from './MapViewScreen';
import ChatScreen from './ChatScreen';
import LoginScreen from './LoginScreen';


const Stack = createStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add this state for authentication

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

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginScreen handleLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {({ navigation }) => (
            <MapViewScreen navigation={navigation} location={location} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
