import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import StatusBarComp from './components/StatusBar'

import Splash from './screens/Splash'
import Home from './screens/Home'
import Tasklist from './screens/TaskList'

import commonStyles from './commonStyles'

const Stack = createStackNavigator()

function Navigator() {
  return (
    <NavigationContainer>
      <StatusBarComp />
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tasklist"
          component={Tasklist}
          options={{
            title: 'Minhas Tarefas',
            headerShown: true,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#01376d' },
            headerTitleStyle: { fontFamily: commonStyles.fontFamily }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator