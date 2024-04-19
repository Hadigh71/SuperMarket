import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import FruitsandVeg from '../pages/FruitsandVeg';
import Meat from '../pages/Meat';
import CleaningTools from '../pages/CleaningTools';
import Chocolate from '../pages/Chocolate';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="fruits" component={FruitsandVeg} />
      <Stack.Screen name="meat" component={Meat} />
      <Stack.Screen name="tools" component={CleaningTools} />
      <Stack.Screen name="chocolate" component={Chocolate} />
    </Stack.Navigator>
  );
}


const Navigator = ({ user, handleAuthentication, handleLogout }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
        </Stack.Navigator>
        </NavigationContainer>
  )
}

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY }}>
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={size} color={color} />) }} />
      <Tab.Screen name="Cart" component={Cart} options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="shopping-cart" size={size} color={color} />) }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color, size }) => (<FontAwesome name="user-circle" size={size} color={color} />) }} />
    </Tab.Navigator>
  );
}
export default Navigator;