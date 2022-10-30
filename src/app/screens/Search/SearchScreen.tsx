import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import {
  SearchScreenContainer,
  HeaderContainer,
  SearchInput,
  SearchIcon,
  SearchBar,
} from './SearchScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, Text, View } from 'react-native';
import { ScoredShow, Show } from '../../../models/show.interface';
import { searchShows } from '../../../services/TVMazeService';
import SearchShowItem from '../../components/SearchShowItem/SearchShowItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;
export type SearchScreenNavigationProp = Props['navigation'];

export default function SearchScreen({ navigation }: Props) {
  const [shows, setShows] = useState<ScoredShow[]>([]);
  const [query, setQuery] = useState<string>('');

  const search = () => searchShows(query).then(result => setShows(result));

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
            placeholder="Search for a show..."
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={search}
            height={50}
            ml={10}
            fontSize={15}
            color="#FFFFFF"
            fontFamily="Roboto-Medium"
          />
        </SearchBar>
      </HeaderContainer>
      {!!shows.length && (
        <FlatList
          data={shows}
          renderItem={({ item, index }) => <SearchShowItem show={item.show} />}
        />
      )}
    </SearchScreenContainer>
  );
}
