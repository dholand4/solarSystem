import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {Ionicons} from '@expo/vector-icons';

import Curiosities from '../pages/Curiosities';
import Settings from '../pages/Settings';
import { PlanetsRoutes } from './planets.routes';

const Tab = createBottomTabNavigator();

export function AppRoutes(){
  
  const { colors } = useContext(ThemeContext);
  
    return<Tab.Navigator
    initialRouteName='Planetas'
    
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        backgroundColor: colors.primary,
        borderTopWidth: 0,
        bottom: 8,
        left: 21,
        right: 21,
        elevation: 0,
        borderRadius: 15,
        height: 56,

        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
      },
      tabBarActiveTintColor: colors.white,
      tabBarInactiveTintColor: colors.text,
    }}
    >


<Tab.Screen name="Curiosidades" component={Curiosities}
        options={{
          tabBarIcon: ({focused}) =>
          <Ionicons name={focused ? 'ios-rocket' : 'ios-rocket-outline'} color={focused ? colors.white : colors.text} size={26} />
        }}
        />

        <Tab.Screen name="Planetas" component={PlanetsRoutes} 
        options={{
          tabBarIcon: ({focused}) =>
          <Ionicons name={focused ? 'earth' : 'earth-outline'} color={focused ? colors.white : colors.text} size={28} />
        }}
        />

<Tab.Screen name="Configurações" component={Settings} 
        options={{
          tabBarIcon: ({focused}) =>
          <Ionicons name={focused ? 'ios-settings' : 'ios-settings-outline'} color={focused ? colors.white : colors.text} size={26} />
        }}
        />

    </Tab.Navigator>
}
