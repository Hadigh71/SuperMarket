// Categories.js
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GlobalApi from '../Utils/GlobalApi';
import Heading from '../Utils/Heading';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Utils/Colors';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const navigation = useNavigation();
    
    useEffect(() => {
        GlobalApi.getCategories().then(setCategories);
    }, []);

    const handlePress = (navTarget) => {
        navigation.navigate(navTarget); // Use the navTarget to navigate
    };

    return (
        <View style={{ marginTop: 10, marginRight: 10, marginLeft: 20 }}>
            <Heading text={'Categories'} />
            <FlatList
                data={categories}
                numColumns={4}  // Adjusted for better spacing, change according to your UI needs
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item.navTarget)} style={styles.touchableContainer}>
                        <View style={styles.iconContainer}>
                            <Image source={{ uri: item.icon.url }} style={styles.image} />
                        </View>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.name}  // Ensure names are unique
            />
        </View>
    );
};

const styles = StyleSheet.create({
    touchableContainer: {
        flex: 1,
        alignItems: 'center',  // Centers the content horizontally
        margin: 5,  // Add margin for spacing between items
        width: 90,  // Adjust the width to fit within columns neatly
    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 10,  // Reduced padding
        borderRadius: 45,  // Adjusted for rounded effect, should be half of width/height
        width: 70,  // Reduced width for a smaller icon container
        height: 70,  // Reduced height to match the width for a circular shape
        justifyContent: 'center',  // Center the image vertically
        alignItems: 'center',  // Center the image horizontally
    },
    image: {
        width: 60,  // Smaller image size
        height: 55,  // Smaller image size
        resizeMode: 'contain'
    },
    text: {
        marginTop: 5,
        textAlign: 'center',  // Ensure text is centered below the image
        fontSize: 12,  // Optional: adjust text size if needed
    }
});


export default Categories;
