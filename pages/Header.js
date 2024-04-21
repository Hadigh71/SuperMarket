// Header.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, showSearchBar = true, showCartLogo = true, user, showEmail = false, searchValue, onSearchChange }) {
const navigation=useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <Text style={{ color: Colors.WHITE, fontSize: 25 }}>{title}</Text>
                {showCartLogo &&
                    <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
                        <FontAwesome name="shopping-cart" size={27} color="white" />
                    </TouchableOpacity>
                }
            </View>
            {showEmail && user && (
                <Text style={styles.userEmail}>{user.email}</Text>
            )}
            {showSearchBar && (
                <View style={styles.searchBarContainer}>
                    <TextInput 
                        placeholder='Search' 
                        style={styles.TextInput} 
                        value={searchValue}
                        onChangeText={onSearchChange}
                    />
                    <FontAwesome name="search" size={24} color={Colors.PRIMARY} />
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
        alignItems: 'center',
    },
    profileMainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop:30
    },
    userEmail: {
        color: Colors.WHITE,
        fontSize: 22,
        marginTop: 30,
        textAlign: 'center',
        width: '100%',
    },
    TextInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16,
    },
    searchBarContainer: {
        marginTop: 40,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
        width: '100%',
        justifyContent:'center',
        marginLeft:15
    },
    searchbtn: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 8
    },
});
