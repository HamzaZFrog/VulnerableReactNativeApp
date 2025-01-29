import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, TextInput, Text, Alert } from 'react-native';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const App = () => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Vulnerability 1: Hardcoded Sensitive Data (Insecure Authentication)
  const hardcodedApiUrl = 'http://vulnerable-api.com'; // Vulnerable API endpoint

  // Vulnerability 2: Improper Authentication (JWT Handling)
  const authenticateUser = async () => {
    // Vulnerability: Hardcoded JWT Secret Key (should be stored securely)
    const secret = 'supersecretkey'; // Do not hardcode secret keys
    const payload = { username };
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    setToken(token);
    Alert.alert('Authenticated', 'JWT Token generated');
  };

  // Vulnerability 3: Insecure Communication (No HTTPS)
  const fetchUserData = async () => {
    try {
      // Vulnerability: No HTTPS used in API call, it should be HTTPS for secure communication
      const response = await axios.post(hardcodedApiUrl + '/user/data', {
        username,
        password,
      });
      Alert.alert('User Data', JSON.stringify(response.data));
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data');
    }
  };

  // Vulnerability 4: Insecure Data Storage (Storing JWT Token in localStorage)
  const storeTokenInLocalStorage = () => {
    localStorage.setItem('user_token', token); // Insecure storage
    Alert.alert('Token Stored', 'JWT Token saved in localStorage');
  };

  // Vulnerability 5: Insufficient Logging & Monitoring
  useEffect(() => {
    // Vulnerability: No logging or monitoring for failed actions (logging should be enabled in production)
    console.log('App started');
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20 }}
      />
      <Button title="Login" onPress={authenticateUser} />
      <Button title="Fetch User Data" onPress={fetchUserData} />
      <Button title="Store Token" onPress={storeTokenInLocalStorage} />
    </SafeAreaView>
  );
};

export default App;
