import axios from 'axios';
import jwt from 'jsonwebtoken';

const apiUrl = 'http://vulnerable-api.com'; // Vulnerable API endpoint

export const authenticateUser = async (username, password) => {
  try {
    // Vulnerability: Hardcoded JWT secret and weak authentication flow
    const response = await axios.post(apiUrl + '/auth/login', { username, password });
    const token = response.data.token;
    
    // Insecure storage of token in localStorage (vulnerable to XSS)
    localStorage.setItem('user_token', token);

    // JWT signing with hardcoded secret (vulnerable)
    const decoded = jwt.decode(token);
    console.log('Authenticated user:', decoded.username);
  } catch (error) {
    console.log('Authentication failed:', error.message);
    Alert.alert('Authentication failed', 'Invalid username or password');
  }
};
