import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Realm from "realm"

const LoginScreen = ({ handleLoginSuccess }) => {
    const [username, setUsername] = useState('');
  
    const handleLogin = async () => {
        // Your login logic here using the Realm authentication code
        const app = new Realm.App({ id: "application-0-xrwrt" });
        const credentials = Realm.Credentials.anonymous();
        try {
          const user = await app.logIn(credentials);
          // If login successful, you can navigate to the main screen or do other actions.
          console.log("user logged in!");
          handleLoginSuccess(); // Call the function to indicate successful login
        } catch(err) {
          console.error("Failed to log in", err);
        }
      };
      
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: 'blue',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 5,
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default LoginScreen;
  