import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Welcome = ({ user, handleLogout }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.emailText}>{user ? user.email : 'No user logged in'}</Text>
        <TouchableOpacity style={styles.goHomeButton} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.goHomeText}>Go to Home</Text>
        </TouchableOpacity>
        <Button title="Logout" onPress={() => handleLogout(navigation)} color="#e74c3c" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  goHomeText: {
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    fontSize: 18,  // Slightly increase font size for better readability
  },
  goHomeButton: {
    width: '100%',
    marginBottom: 10,  // Increased space between the Go to Home and Logout button
  }
});

export default Welcome;
