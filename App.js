import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './CameraScreen';
import MapViewScreen from './MapViewScreen';
import Chat from './Chat';
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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#303030', // Replace 'YOUR_COLOR_HERE' with the desired color
            shadowColor: 'transparent',
          },
          headerTintColor: 'white', // Set the font color of the header text to white
          headerTitleStyle: {
            fontWeight: 'bold', // You can customize the header title style here
          },
        }}
      >
        <Stack.Screen name="Main" options={{ headerShown: false }}>
          {({ navigation }) => (
            <MapViewScreen navigation={navigation} location={location} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
