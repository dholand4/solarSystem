import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    return <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          borderRadius: 25,
          height: 45,
        },
        tabBarHideOnKeyboard: true,
      }}>
        <Tab.Screen name="Home" component={Home} />

    </Tab.Navigator>
}