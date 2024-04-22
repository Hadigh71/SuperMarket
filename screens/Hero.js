import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Modal, Dimensions } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react'; // Import useCallback

const window = Dimensions.get("window");

const Hero = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();

    // Use the useFocusEffect hook to handle modal visibility when navigating back
    useFocusEffect(
        useCallback(() => {
            setModalVisible(true);
            return () => setModalVisible(false); // Optionally reset on leaving the screen
        }, [])
    );

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/chat.webp')} style={styles.backgroundImage}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Welcome to MarketMate!</Text>
                        <Text style={styles.modalText}>
                            We're excited to help you find everything you need for your home and kitchen.
                            Browse our wide selection of fresh produce.
                            Get started now and experience the easiest way to shop for groceries online!
                        </Text>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => { setModalVisible(false); navigation.navigate('Login') }}>
                            <Text style={styles.buttonText}>Let's Get Started</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
    },
    modalView: {
      position: 'absolute',
      bottom: 0,
      width: window.width,
      height: window.height * 0.38,  // Adjust this value to change how tall the modal is
      backgroundColor: "#FFF9C4",  // Soft light yellow
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: "center"
    },
    buttonStyle: {
      width: '100%',
      height: 50,
      borderRadius: 5,
      backgroundColor: '#00796B',  // Deep teal for the button
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '500',
    },
  });
  

export default Hero;
