import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from 'styled-components';
import About from '../pages/About';
import Curiosities from '../pages/Curiosities';
import { Home } from '../pages/Home';
import Settings from '../pages/Settings';
import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigation() {
  const { colors } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
    screenOptions={{
      headerTintColor: colors.primary,
      drawerActiveTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.background,
      },
      drawerStyle: {
        backgroundColor: colors.primary,
      },
      drawerInactiveTintColor: colors.text
    }}
    >
      <Drawer.Screen name="Planetas" component={Home} 
      options={{
        drawerIcon: ({focused}) =>
        <Ionicons name={focused ? 'earth' : 'earth-outline'} color={focused ? colors.white : colors.text} size={28} />
      }}/>

      <Drawer.Screen name="Curiosidades" component={Curiosities} 
      options={{
        drawerIcon: ({focused}) =>
        <Ionicons name={focused ? 'ios-rocket' : 'ios-rocket-outline'} color={focused ? colors.white : colors.text} size={26} />
      }} />
      <Drawer.Screen name="Configurações" component={Settings}
              options={{
                drawerIcon: ({focused}) =>
                <Ionicons name={focused ? 'ios-settings' : 'ios-settings-outline'} color={focused ? colors.white : colors.text} size={26} />
              }}
              />
    </Drawer.Navigator>
  ) 
}
export function AppRoutes(){
    return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Home' component={DrawerNavigation} />
    <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
);
}