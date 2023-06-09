import { View, Text } from 'react-native'
import React from 'react'
import TabNavigator from '../drawer/TabNavigator'

const Parent = () => {
  return (
    <View style={{flex:1}}>
      <TabNavigator />
    </View>
  )
}

export default Parent