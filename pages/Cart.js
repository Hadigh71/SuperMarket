import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useCart } from '../Utils/CartContext';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';
import NoItemsGif from '../assets/empty.gif';

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, getTotalCartAmount } = useCart();
  const navigation = useNavigation();
  const totalAmount = getTotalCartAmount();

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);


  return (
    <View style={{ flex: 1 }}>
      <Header title='Cart Items' showCartLogo={false} />
      <View style={styles.container}>
        {totalAmount > 0 ? (
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
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your Cart is empty</Text>
            <Image source={NoItemsGif} style={styles.emptyGif} />
          </View>
        )}
        <View style={styles.footer}>
          <Text style={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('CheckoutScreenName')}>
              <Text style={styles.checkoutText}>Go to Checkout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.continueShoppingButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.continueShoppingText}>Continue Shopping</Text>
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
    marginTop: 10,  // Reduced margin top
    paddingTop: 5,  // Reduced padding top
    paddingBottom: 5,  // Reduced padding bottom
  },
  subtotal: {
    fontSize: 16,  // Reduced font size for subtlety
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,  // Added a small bottom margin for separation
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5,  // Reduced margin top for compact design
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  emptyGif: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  checkoutButton: {
    width: '100%',
    height: 40,  // Reduced height
    borderRadius: 5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,  // Slightly reduced font size
    fontWeight: '500',
  },
  continueShoppingButton: {
    width: '100%',
    height: 40,  // Reduced height
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,  // Reduced margin top
    borderWidth: 2,  // Slightly thinner border
    borderColor: 'green',
  },
  continueShoppingText: {
    color: 'green',
    fontSize: 16,  // Slightly reduced font size
    fontWeight: '500',
  },
});

export default Cart;

