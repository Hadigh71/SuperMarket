// SignUp.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SignUp = ({ handleAuthentication }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={{width: '100%',
            height: 50,
            borderRadius: 5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderWidth: 3,
            borderColor: '#009ACF',
            borderRadius: 5,}} onPress={() => handleAuthentication(false, email, password, navigation)} color="#3498db" >
            <Text style={{
              color: '#009ACF',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Sign Up
          </Text>
         </TouchableOpacity>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity style={{
            width: '100%',
            height: 50,
            borderRadius: 5,
            backgroundColor: '#009ACF',
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
            }}>
            Log In Instead
          </Text>
        </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  button: {
    marginBottom: 16,
  },
  login: {
    textAlign: 'center',
    color: '#3498db',
    marginTop: 20,
  },
  loginText: {
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    marginBottom:20
  }
});

export default SignUp;
