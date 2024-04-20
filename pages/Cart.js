import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useCart } from '../Utils/CartContext';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } = useCart();
  const navigation=useNavigation();

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <View style={{ flex: 1 }}>
      <Header title='Cart Items' showCartLogo={false} />
      <View style={styles.container}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetailsAndRemoveContainer}>
                <View style={styles.itemDetailContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.quantityContainer}>
                    <Button title="+" onPress={() => incrementQuantity(item.id)} />
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <Button title="-" onPress={() => decrementQuantity(item.id)} />
                  </View>
                  <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
                </View>
                <Button style={styles.remove} title="Remove" onPress={() => removeFromCart(item.id)} color="#ff4444" />
              </View>
            </View>
          )}
        />
        <View style={styles.footer}>
          <Text style={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</Text>
          <View style={{padding:20}}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderRadius: 5,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate(CheckoutScreenName)}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                Go to Checkout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderRadius: 5,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                borderWidth: 3,
                borderColor: 'green',
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate('Home')}>
              <Text
                style={{
                  color: 'green',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemDetailsAndRemoveContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetailContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginLeft: 20
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 20,
    paddingTop: 10,
  },
  subtotal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column', // Changed to column to stack buttons vertically
    alignItems: 'center', // Align buttons to center horizontally
    marginTop: 10,
  },
});

export default Cart;