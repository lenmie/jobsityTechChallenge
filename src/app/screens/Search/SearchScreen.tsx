import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import {
  SearchScreenContainer,
  HeaderContainer,
  SearchInput,
  SearchBar,
  ResultsContainer,
} from './SearchScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, TouchableOpacity } from 'react-native';
import { ScoredShow } from '../../../models/show.interface';
import { searchShows } from '../../../services/TVMazeService';
import SearchShowItem from '../../components/SearchShowItem/SearchShowItem';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { colors } from '../../../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;
export type SearchScreenNavigationProp = Props['navigation'];

const PLACEHOLDER = 'Search for a show...';

export default function SearchScreen({ navigation }: Props) {
  const [shows, setShows] = useState<ScoredShow[]>([]);
  const [query, setQuery] = useState<string>('');

  const search = () => searchShows(query).then(result => setShows(result));

  return (
    <SearchScreenContainer flex={1} bg={colors.primaryBlack}>
      <HeaderContainer
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="space-around">
        <ButtonIcon onPress={() => navigation.pop()} name="arrow-left" />
        <SearchBar
          mt={20}
          mx={10}
          px={2}
          height={45}
          width="70%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          bg={colors.secondaryGrey}>
          <SearchInput
            autoFocus
            placeholder={PLACEHOLDER}
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={search}
            height={50}
            ml={10}
            fontSize={15}
            color={colors.primaryWhite}
            fontFamily="Roboto-Medium"
          />
          <TouchableOpacity onPress={search}>
            <Icon size={30} color={colors.primaryWhite} name="magnify" />
          </TouchableOpacity>
        </SearchBar>
      </HeaderContainer>
      <ResultsContainer px={15}>
        {!!shows.length && (
          <FlatList
            data={shows}
            renderItem={({ item }) => <SearchShowItem show={item.show} />}
          />
        )}
      </ResultsContainer>
    </SearchScreenContainer>
  );
}
