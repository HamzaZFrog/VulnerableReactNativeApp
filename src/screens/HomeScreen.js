import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const HomeScreen = () => {
  const onLogoutPress = () => {
    // Vulnerability: No secure logout implementation
    Alert.alert('Logout', 'You have logged out successfully!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={onLogoutPress} />
    </View>
  );
};

export default HomeScreen;
