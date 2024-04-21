// App.js
import React, { useState, useEffect } from 'react';
import Navigator from './navigator/Navigator';
import { auth } from './firebase'; // Ensure this import correctly initializes Firebase
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { CartProvider } from './Utils/CartContext';
import { UserProvider } from './Utils/UserContext';


const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(); // Ensure Firebase auth is initialized correctly

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      console.log("Auth State Changed: ", authenticatedUser);
      setUser(authenticatedUser);  // Make sure this is not nested or conditional without proper checks
    });
    return unsubscribe;  // Make sure this is the function returned directly for cleanup
  }, []);


  const handleAuthentication = async (isLogin, email, password, navigation) => {
    try {
      if (isLogin) {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
        navigation.navigate('Main');
      } else {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up successfully!');
        navigation.navigate('Main');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const handleLogout = async (navigation) => {
    try {
      await signOut(auth); // Assuming 'auth' is your Firebase auth instance
      console.log("User signed out");

      // Properly reset the navigation stack
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });

    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };



  return (
    <UserProvider>
      <CartProvider>
        <Navigator user={user} handleAuthentication={handleAuthentication} handleLogout={handleLogout} />
      </CartProvider>
    </UserProvider>
  )
};

export default App;