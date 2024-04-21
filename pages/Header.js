import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, showSearchBar = true, showCartLogo = true, user, showEmail = false }) {
    const navigation = useNavigation();
    

    return (
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <Text style={{ color: Colors.WHITE, fontSize: 25, marginTop: 25 }}>{title}</Text>
                {showCartLogo &&
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <FontAwesome name="shopping-cart" size={27} style={{ marginTop: 30 }} color="white" />
                    </TouchableOpacity>
                }
            </View>

            {showEmail && user && (
                <Text style={styles.userEmail}>{user.email}</Text>  // Customized style for email display
            )}

            {showSearchBar && (
                <View style={styles.searchBarContainer}>
                    <TextInput placeholder='Search' style={styles.TextInput} />
                    <FontAwesome name="search" style={styles.searchbtn} size={24} color={Colors.PRIMARY} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',  // Center content horizontally
    },
    profileMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'  // Ensure the container uses the full width
    },
    userEmail: {
        color: Colors.WHITE,
        fontSize: 22,  // Increase the font size
        marginTop: 30,  // Adjust spacing as needed
        textAlign: 'center',  // Center text horizontally
        width: '100%'  // Ensure the text spans the full width
    },
    TextInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },
    searchBarContainer: {
        marginTop: 40,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
        width: '100%'  // Ensure the container uses the full width
    },
    searchbtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    }
});
