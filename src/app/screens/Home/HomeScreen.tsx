import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useEffect, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Show } from '../../../models/show.interface';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { getShows } from '../../../services/TVMazeService';
import FeedItem from '../../components/FeedItem/FeedItem';
import {
  HomeScreenContainer,
  HeaderContainer,
  Title,
  ListContainer,
} from './HomeScreen.styled';
import { colors } from '../../../constants/colors';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { fontSizes } from '../../../constants/fontSizes';

const { height } = Dimensions.get('screen');
const headerHeight = height * 0.12;
const HOME_TITLE = 'Home';

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

  return (
    <HomeScreenContainer flex={1} bg={colors.primaryBlack}>
      <HeaderContainer
        height={headerHeight}
        width="100%"
        pb={10}
        px={10}
        justifyContent="space-between"
        alignItems="flex-end"
        flexDirection="row">
        <Title
          fontSize={fontSizes.gigantic}
          color={colors.primaryWhite}
          ml={15}
          mb={2}
          fontFamily="Roboto-Bold">
          {HOME_TITLE}
        </Title>
        <ButtonIcon onPress={() => navigation.push('Search')} name="magnify" />
      </HeaderContainer>
      {!!shows.length && (
        <ListContainer alignItems="center">
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
        </ListContainer>
      )}
    </HomeScreenContainer>
  );
}
