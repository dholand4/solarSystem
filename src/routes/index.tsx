import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalRoutes } from './global.routes';

export function Routes() {
    return <NavigationContainer>
        <GlobalRoutes />
    </NavigationContainer>

}