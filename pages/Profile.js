import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'

export default function Profile() {
  return (
    <View>
      <Header title="Profile" showSearchBar={false}/>
    </View>
  )
}