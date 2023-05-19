import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Categories from './pages/Categories'
import Details from './pages/Details'

const Router = () => {

  const Stack = createNativeStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='CategoriesPage'
          component={Categories}
          options={{title: 'BLOG', headerTitleAlign:'center', headerTintColor:'white', statusBarColor: '#6d120d', 
                  headerStyle:{backgroundColor: '#6d120d'}}}
        />
        <Stack.Screen 
          name='DetailPage'
          component={Details}
          options={{title: 'Detail', headerTitleAlign:'center', headerTintColor:'white', statusBarColor: '#6d120d',
                  headerStyle:{backgroundColor: '#6d120d'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router