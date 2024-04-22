import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'

export default function HomeScreen() {
  return (
    <View>
      <Header title="Home Page" showSearchBar={false} showBackArrow={false}/>
      <View style={{padding:20 , marginTop:20}}>
        
        <Slider/>
      </View>
      <View style={{marginTop:35}}>
      <Categories/>
      </View>
      
      
    </View>
  )
}