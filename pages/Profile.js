import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ user, handleLogout }) => {
  const navigation = useNavigation();

  const profileMenu = [
    { id: 1, name: "Home", icon: 'home' },
    { id: 2, name: "My Cart", icon: 'cart' },
    { id: 3, name: "Contact us", icon: 'mail' },
    { id: 4, name: "Logout", icon: 'log-out' }
  ];

  const handleNavigation = (destination) => {
    switch(destination) {
      case 'Home':
        navigation.navigate('Home');
        break;
      case 'My Cart':
        navigation.navigate('Cart');
        break;
      case 'Contact us':
        break;
      case 'Logout':
        handleLogout(navigation);
        break;
    }
  }

  return (
    <View>
      <Header title="Profile" user={user} showSearchBar={false} showBackArrow={false} showEmail={true} />
      <View style={{ paddingTop: 60 }}>
        <FlatList  
          data={profileMenu}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40,marginTop:20, paddingHorizontal: 80 }}
              onPress={() => handleNavigation(item.name)}
            >
              <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
              <Text style={{ fontSize: 20 , marginLeft:8}}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>    
    </View>
  );
};

export default Profile;
