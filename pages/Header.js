import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, showSearchBar = true, showCartLogo=true }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.profileMainConatiner}>
                <Text style={{ color: Colors.WHITE, fontSize: 25, marginTop: 30, marginTop:25 }}>{title}</Text>
                {showCartLogo &&
                <TouchableOpacity onPress={() => navigation.navigate('cart')}>
                    <FontAwesome name="shopping-cart" size={27} style={{ marginTop: 30 }}
                        color="white" />
                </TouchableOpacity>
                }
            </View>
                
            {showSearchBar && (
                <View style={styles.searchBarContainer}>
                    <TextInput placeholder='Search'
                        style={styles.TextInput} />
                    <FontAwesome name="search"
                        style={styles.searchbtn} size={24} color={Colors.PRIMARY} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    profileMainConatiner:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
        

    },
    profileConatiner:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        gap:10

    },
    TextInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16

    },
    searchBarContainer:{
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10
    },
    searchbtn:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99
    }
})
