// Navigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';
import TabNavigation from './TabNavigation'; // Make sure the path is correct
import Cart from '../pages/Cart';
import FruitsandVeg from '../pages/FruitsandVeg';
import Meat from '../pages/Meat';
import CleaningTools from '../pages/CleaningTools';
import Chocolate from '../pages/Chocolate';

const Stack = createStackNavigator();

const Navigator = ({ user, handleAuthentication, handleLogout }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="Login">
          {props => <Login {...props} handleAuthentication={handleAuthentication} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => <SignUp {...props} handleAuthentication={handleAuthentication} />}
        </Stack.Screen>
        <Stack.Screen name="Welcome">
          {props => <Welcome {...props} user={user} handleLogout={handleLogout} />}
        </Stack.Screen>
        <Stack.Screen name="Main" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="fruits" component={FruitsandVeg} options={{ headerShown: false }} />
        <Stack.Screen name="meat" component={Meat} options={{ headerShown: false }} />
        <Stack.Screen name="tools" component={CleaningTools} options={{ headerShown: false }} />
        <Stack.Screen name="chocolate" component={Chocolate} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
