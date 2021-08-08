import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StarMaps  from './screens/StarMaps';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';

function App() {
    return (
        <NavigationContainer> 
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="home" component={HomeScreen}/> 
                <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} /> 
                <Stack.Screen name="DailyPic" component={DailyPicScreen} /> 
                <Stack.Screen name="StarMap" component={StarMapScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}
