import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Welcome  from '../pages/Welcome';


const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name='Welcome' component={Welcome} />

    </Stack.Navigator>
}