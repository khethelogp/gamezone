import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator 
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ title: 'Home' }} 
            />
            <Stack.Screen 
                name="ReviewDetails" 
                component={ReviewDetails} 
                options={{ title: 'Review Details' }} 
            />
        </Stack.Navigator> 
    );
}

export default HomeStack
