import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Show } from '../../../models/show.interface';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { getShows } from '../../../services/TVMazeService';
import FeedItem from '../../components/FeedItem';
import {
  HomeScreenContainer,
  HeaderContainer,
  Title,
} from './HomeScreen.styled';

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
    <HomeScreenContainer flex={1}>
      <HeaderContainer
        height={100}
        width="100%"
        justifyContent="center"
        alignItems="center">
        <Title fontSize={24} fontFamily="MuseoSans">
          Discover
        </Title>
      </HeaderContainer>
      {!!shows.length && (
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
      )}
    </HomeScreenContainer>
  );
}
