import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'

export default function Cart() {
  return (
    <View>
      <Header title="Cart Items" showCartLogo={false} />
    </View>
  )
}