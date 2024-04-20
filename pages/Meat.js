import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet,Button, FlatList, TouchableOpacity } from 'react-native';
import Products from '../Utils/Products';  // Ensure this path is correct
import Header from './Header';  // Ensure this path is correct
import { useCart } from '../Utils/CartContext';

const Meat = () => {
  const [meat, setMeat] = useState([]);
  const { addToCart }= useCart();

  useEffect(() => {
    async function fetchMeat() {
      const meatData = await Products.getMeat();
      setMeat(meatData);
    }
    fetchMeat();
  }, []);

  return (
    <View style={{flex:1}}>
      <Header title='Meat/Chicken/Fish' />
      <FlatList
        data={meat}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => addToCart(item)} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
            <Button
              title="Add to Cart"
              onPress={() => addToCart(item)}
              color="#20C659" // Optional: change button color
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}  // Use item.id as the key extractor
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
    marginBottom:10
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default Meat;
