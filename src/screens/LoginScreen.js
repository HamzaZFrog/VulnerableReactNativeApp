import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { authenticateUser } from '../services/AuthService';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    authenticateUser(username, password);
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={onLoginPress} />
    </View>
  );
};

export default LoginScreen;
