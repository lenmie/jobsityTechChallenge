import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Show } from '../../../models/show.interface';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { getShows } from '../../../services/TVMazeService';
import FeedItem from '../../components/FeedItem/FeedItem';
import {
  HomeScreenContainer,
  HeaderContainer,
  Title,
  SearchButton,
} from './HomeScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type HomeScreenNavigationProp = Props['navigation'];

export default function HomeScreen({ navigation }: Props) {
  const [shows, setShows] = useState<Show[]>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getShows(page).then(newShows =>
      setShows(previousShows => [...previousShows, ...newShows]),
    );
  }, [page]);
  console.log('render');

  return (
    <HomeScreenContainer flex={1} bg="#1B1B1B">
      <HeaderContainer
        height={100}
        width="100%"
        justifyContent="space-between"
        alignItems="flex-end"
        flexDirection="row">
        <Title
          fontSize={30}
          color="#FFFFFF"
          ml={15}
          fontFamily="Roboto-Bold"
          mb={20}>
          Home
        </Title>
        <SearchButton
          onPress={() => navigation.push('Search')}
          height={50}
          width={50}
          mr={20}
          mb={10}
          borderRadius={40}
          justifyContent="center"
          alignItems="center"
          bg="#303030">
          <Icon size={30} color="white" name="magnify" />
        </SearchButton>
      </HeaderContainer>
      {!!shows.length && (
        <View style={{alignItems:'center'}}>
          <FlatList
            numColumns={2}
            data={shows}
            renderItem={({ item, index }) => (
              <FeedItem item={item} index={index} />
            )}
            onEndReached={() => {
              setPage(page + 1);
            }}
          />
        </View>
      )}
    </HomeScreenContainer>
  );
}
