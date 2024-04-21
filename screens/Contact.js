import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { firestore } from '../firebase'; // Ensure this import is correct
import Header from '../pages/Header';
import { addDoc, collection } from '@firebase/firestore';
import { useUser } from '../Utils/UserContext';

function Contact() {
    const {user}=useUser();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);

    const submit = async () => {
        setLoader(true);
        try {
            const contactsRef = collection(firestore, "contacts");
            await addDoc(contactsRef, {
                username: username,
                email: user.email,
                message: message
            });
            Alert.alert("Success", "Your message has been sent!");
            setUsername('');
            setEmail('');
            setMessage('');
        } catch (error) {
            Alert.alert("Error", error.message);
        }
        setLoader(false);
    };

    return (
        <View style={styles.fullPage}>
            <Header title="Contact us" showCartLogo={false} showSearchBar={false} />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.header}>Get in touch</Text>
                    <TextInput style={styles.input} placeholder='Your Name' value={username} onChangeText={setUsername} autoCapitalize="words" />
                    <TextInput style={styles.textArea} placeholder="How can we help you?" value={message} onChangeText={setMessage} multiline={true} numberOfLines={4} />
                    <TouchableOpacity style={{
                        width: '100%',
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: 'green',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} onPress={submit}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: '500',
                            }}>
                            Send Message
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        backgroundColor: '#e8e8e8', // Sets the background color for the whole page
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center', // Center the box horizontally
        padding: 20,
    },
    box: {
        width: '100%', // or specific width like 300
        backgroundColor: '#fff', // Background color for the box
        padding: 20,
        borderRadius: 10, // Rounded corners for the box
        borderWidth: 1, // Border to make the box distinct
        borderColor: '#ddd', // Border color
        shadowColor: "#000", // Shadow for the box
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Elevation for Android
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 15,
        marginBottom: 10,
        fontSize: 16,
    },
    textArea: {
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 15,
        height: 120,
        textAlignVertical: 'top',
        marginBottom: 20,
        fontSize: 16,
    },
    buttonContainer: {
        backgroundColor: 'green',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center', // Center text inside the button
        justifyContent: 'center', // Center text vertically
        height: 60, // Sets a fixed height for the button
        width: '100%' // Optional: adjust as needed
    },
    buttonText: {
        color: 'white',
        fontSize: 20, // Increase font size for better readability
        fontWeight: 'bold' // Optional: make the text bold
    }
});

export default Contact;
