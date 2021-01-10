import React from 'react'
import { StatusBar } from 'react-native'

export default function StatusBarComp() {
  return (
    <StatusBar
      barStyle='light-content'
      hidden={true}
      backgroundColor='black'
    />
  )
}