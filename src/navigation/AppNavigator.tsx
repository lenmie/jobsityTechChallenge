import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from '../app/screens/Detail/DetailScreen';
import { Show } from '../models/show.interface';
import HomeScreen from '../app/screens/Home/HomeScreen';
import EpisodeListScreen from '../app/screens/EpisodeList/EpisodeListScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Detail: Show;
  EpisodeList: { id: number };
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
        <Stack.Screen name="EpisodeList" component={EpisodeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
