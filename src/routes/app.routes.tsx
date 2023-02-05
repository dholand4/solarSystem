import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {Ionicons} from '@expo/vector-icons';

import { Home } from '../pages/Home';
import Curiosities from '../pages/Curiosities';
import Quiz from '../pages/Quiz';
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
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 15,
        height: 50,
      },
      tabBarActiveTintColor: colors.background,
      tabBarInactiveTintColor: colors.text,
    }}>
<Tab.Screen name="Planetas" component={PlanetsRoutes} 
        options={{
          tabBarIcon: ({focused}) =>
          <Ionicons name={focused ? 'earth' : 'earth-outline'} color={focused ? colors.background : colors.text} size={28} />
        }}
        />

<Tab.Screen name="Curiosidades" component={Curiosities}
        options={{
          tabBarIcon: ({focused}) =>
          <Ionicons name={focused ? 'ios-rocket' : 'ios-rocket-outline'} color={focused ? colors.background : colors.text} size={26} />
        }}
        />

<Tab.Screen name="Quiz" component={Quiz}         
        options={{
          tabBarIcon: ({focused}) =>
          <Ionicons name={focused ? 'ios-game-controller' : 'ios-game-controller-outline'} color={focused ? colors.background : colors.text} size={28} />
        }} />

<Tab.Screen name="Configurações" component={Settings} 
        options={{
          tabBarIcon: ({focused}) =>
          <Ionicons name={focused ? 'ios-settings' : 'ios-settings-outline'} color={focused ? colors.background : colors.text} size={26} />
        }}
        />

    </Tab.Navigator>
}
