import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../app/screens/HomeScreen';
import DetailScreen from '../app/screens/DetailScreen';
import { Show } from '../models/show.interface';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Detail: Show;
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
