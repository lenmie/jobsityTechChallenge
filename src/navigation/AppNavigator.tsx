import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from '../app/screens/Detail/DetailScreen';
import { Show } from '../models/show.interface';
import HomeScreen from '../app/screens/Home/HomeScreen';
import EpisodeListScreen from '../app/screens/EpisodeList/EpisodeListScreen';
import SearchScreen from '../app/screens/Search/SearchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Detail: Show;
  EpisodeList: { id: number };
  Search: undefined;
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="EpisodeList" component={EpisodeListScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
