// App.js
import React, { useState, useEffect } from 'react';
import Navigator from './navigator/Navigator';
import { auth } from './firebase'; // Ensure this import correctly initializes Firebase
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(); // Ensure Firebase auth is initialized correctly

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleAuthentication = async (isLogin, email, password, navigation) => {
    try {
      if (isLogin) {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
        navigation.navigate('Welcome');
      } else {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up successfully!');
        navigation.navigate('Welcome');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };
  
  const handleLogout = async (navigation) => {
    try {
      await signOut(auth);
      console.log("User signed out");
      navigation.replace('Login');  // Use navigation.replace to clear the navigation stack
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };


  return <Navigator user={user} handleAuthentication={handleAuthentication} handleLogout={handleLogout} />;
};

export default App;