import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tab.Screen name='home' component={Home}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Home</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="home" size={size} color={color} />
            )

        }}
         
        />
        <Tab.Screen name='cart' component={Cart}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Cart</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="shopping-cart" size={size} color={color} />
            )

        }}
         />
        <Tab.Screen name='profile' component={Profile}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>
                    Profile</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user-circle" size={size} color={color} />
            )

        }} />
    </Tab.Navigator>
  )
}