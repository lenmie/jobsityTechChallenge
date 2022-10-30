import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import {
  SearchScreenContainer,
  HeaderContainer,
  SearchInput,
  SearchIcon,
  SearchBar,
} from './SearchScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;
export type SearchScreenNavigationProp = Props['navigation'];

export default function SearchScreen({ navigation }: Props) {
  // const [shows, setShows] = useState<Show[]>([]);
  // const [page, setPage] = useState(1);
  // useEffect(() => {
  //   getShows(page).then(newShows =>
  //     setShows(previousShows => [...previousShows, ...newShows]),
  //   );
  // }, [page]);

  return (
    <SearchScreenContainer flex={1} bg="#1B1B1B">
      <HeaderContainer height={110} width="100%">
        <View style={{ flex: 2 }}></View>
        <SearchBar
          flex={2}
          width="100%"
          alignItems="center"
          pl={10}
          bg="grey"
          flexDirection="row">
          <Icon size={30} color="white" name="magnify" />
          <SearchInput
            height={50}
            ml={10}
            fontSize={15}
            color="#FFFFFF"
            fontFamily="Roboto-Medium">
            Discover
          </SearchInput>
        </SearchBar>
      </HeaderContainer>
      {/* {!!shows.length && (
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
      )} */}
    </SearchScreenContainer>
  );
}
