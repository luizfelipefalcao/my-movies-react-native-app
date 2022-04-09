import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} title="Detalhes" options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default StackRoutes;