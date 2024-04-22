import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet,Button, FlatList, TouchableOpacity } from 'react-native';
import Products from '../Utils/Products';  
import Header from './Header';  
import { useCart } from '../Utils/CartContext';
import { useNavigation } from '@react-navigation/native';

const CannedFood = () => {
  const [canned, setCanned] = useState([]);
  const[searchTerm, setSearchTerm]= useState('');
  const navigation= useNavigation();

  useEffect(() => {
    async function fetchCanned() {
      const cannedData = await Products.getCanned();
      setCanned(cannedData);
    }
    fetchCanned();
  }, []);

  const filteredCanned = canned.filter(can =>
    can.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={{flex:1}}>
      <Header title='Canned Food' onSearchChange={setSearchTerm} />
      <FlatList
        data={filteredCanned}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { item })} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
            
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

export default CannedFood;
