import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from 'styled-components';


import SolarSystem from '../pages/SolarSystem';
import Planets from '../pages/Planets';
import Stars from '../pages/Stars';
import Others from '../pages/Others';
import Curiosities from '../pages/Curiosities';
import Settings from '../pages/Settings';

import {Ionicons, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigation() {
  const { colors } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
    screenOptions={{
      headerTintColor: colors.white,
      headerTitleAlign: "center",
      drawerActiveTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.background,
        borderBottomWidth: 0,
      },
      drawerStyle: {
        backgroundColor: colors.background,
      },
      drawerInactiveTintColor: colors.text,
    }}
    >
      <Drawer.Screen name="SolarSystem" component={SolarSystem} 
      options={{
        title:'Sistema Solar',
        drawerLabel: 'Sistema Solar',

        
        drawerIcon: ({focused}) =>
        <MaterialCommunityIcons name={focused ? 'sun-wireless' : 'sun-wireless-outline'} color={focused ? colors.white : colors.text} size={28} />
      }}/>

      <Drawer.Screen name="Planets" component={Planets} 
      options={{
        title:'Planetas',
        drawerLabel: 'Planetas',
        drawerIcon: ({focused}) =>
        <Ionicons name={focused ? 'earth' : 'earth-outline'} color={focused ? colors.white : colors.text} size={28} />
        
      }} />
      <Drawer.Screen name="Stars" component={Stars}
              options={{
                title:'Astros',
                drawerLabel: 'Astros',
                drawerIcon: ({focused}) =>
                <MaterialCommunityIcons name={focused ? 'star-shooting' : 'star-shooting-outline'} color={focused ? colors.white : colors.text} size={26} />
              }}
              />
                    <Drawer.Screen name="Others" component={Others}
              options={{

                title:'Outros',
                drawerLabel: 'Outros',
                drawerIcon: ({focused}) =>
                <Octicons name={focused ? 'telescope-fill' : 'telescope'} color={focused ? colors.white : colors.text} size={26} />
              }}
              />
                    <Drawer.Screen name="Curiosities" component={Curiosities}
                    
              options={{
      headerTintColor: colors.white,

                headerStyle:{
                  backgroundColor: colors.background,
                },
                title:'Curiosidades',
                drawerLabel: 'Curiosidades',
                drawerIcon: ({focused}) =>
                <Ionicons name={focused ? 'ios-rocket' : 'ios-rocket-outline'} color={focused ? colors.white : colors.text} size={26} />
              }}
              />

<Drawer.Screen name="Settings" component={Settings}
              options={{
                title:'Configurações',
                drawerLabel: 'Configurações',
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
    </Stack.Navigator>
);
}