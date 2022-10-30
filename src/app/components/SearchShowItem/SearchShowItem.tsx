import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Show } from '../../../models/show.interface';
import {
  ShowImage,
  ContainerTouchable,
  Subtitle,
  Title,
} from './SearchShowItem.styled';
import { TextContainer } from '../../screens/Detail/DetailScreen.styled';
import { SearchScreenNavigationProp } from '../../screens/Search/SearchScreen';

interface Props {
  show: Show;
}

export default function SearchShowItem({ show }: Props) {
  const navigation = useNavigation<SearchScreenNavigationProp>();

  return (
    <ContainerTouchable
      onPress={() => navigation.push('Detail', show)}
      marginTop={2}
      flexDirection="row">
      <ShowImage
        source={{ uri: show.image?.original }}
        width={80}
        height={60}
      />
      <TextContainer marginBottom={9} marginLeft={12}>
        <Title numberOfLines={1} fontSize={3} color="white" fontWeight="600">
          {show.name}
        </Title>
        <Subtitle
          numberOfLines={1}
          marginTop={5}
          fontSize={1}
          color="white"
          fontWeight="300">
          {show.type}
        </Subtitle>
      </TextContainer>
    </ContainerTouchable>
  );
}
