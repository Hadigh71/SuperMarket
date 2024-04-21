import React ,{useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCart } from '../Utils/CartContext';
import Header from './Header';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;  // Retrieve the item parameter
  const {addToCart}= useCart();

  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleAddToCart = () => {
    addToCart(item);  // Add item to the cart
    setQuantityAdded(prev => prev + 1);  // Increment the counter
  };

  return (
    <ScrollView style={styles.container}>
    <Header title='Item details' showSearchBar={false} />
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description || "No description available."}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={{
            width: '100%',
            height: 50,
            borderRadius: 5,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }} onPress={() => {handleAddToCart()}}>
            <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
            }}>
            {`Add to Cart ${quantityAdded>0?` (${quantityAdded})`: ''}`}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300, // Adjust the height to fit your design
    resizeMode: 'cover',
    marginTop:80
  },
  textContainer: {
    padding: 20,
    alignItems: 'center', // Centers everything in the text container horizontally
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center-align text
  },
  description: {
    fontSize: 16,
    textAlign: 'center', // Center-align text
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
    textAlign: 'center', // Center-align text
  },
});

export default Details;
