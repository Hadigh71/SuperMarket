// Fruits.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Header from './Header';
import Products from '../Utils/Products';  // Make sure the path is correct
import { useNavigation } from '@react-navigation/native';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchFruits() {
            const fruitsData = await Products.getFruits();
            setFruits(fruitsData);
        }
        fetchFruits();
    }, []);

    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <View style={{ flex: 1 }}>
            <Header 
                title='Fruits and Vegetables' 
                showSearchBar={true} 
                searchValue={searchTerm} 
                onSearchChange={setSearchTerm}
            />
            <FlatList
                data={filteredFruits}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} style={styles.card}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4,
    },
    image: {
        width: 150,
        height: 100,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    price: {
        fontSize: 16,
        color: 'green',
    },
});

export default Fruits;
