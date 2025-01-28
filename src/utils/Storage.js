// Vulnerability: Storing token in localStorage (should use secure storage)
export const storeToken = (token) => {
    localStorage.setItem('user_token', token); // Insecure storage
  };
  
  export const getToken = () => {
    return localStorage.getItem('user_token'); // Retrieve token from insecure localStorage
  };
  