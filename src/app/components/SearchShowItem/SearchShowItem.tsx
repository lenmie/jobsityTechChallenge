import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Show } from '../../../models/show.interface';
import {
  ShowImage,
  ContainerTouchable,
  Subtitle,
  Title,
  TextContainer,
} from './SearchShowItem.styled';
import { SearchScreenNavigationProp } from '../../screens/Search/SearchScreen';
import { colors } from '../../../constants/colors';

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
      <TextContainer ml={15} width={'70%'}>
        <Title
          ellipsizeMode="tail"
          numberOfLines={1}
          fontSize={3}
          color={colors.primaryWhite}
          fontFamily="Roboto-Bold">
          {show.name}
        </Title>
        <Subtitle
          numberOfLines={1}
          marginTop={5}
          fontSize={1}
          color={colors.primaryWhite}
          fontFamily="Roboto-LightItalic">
          {show.type}
        </Subtitle>
      </TextContainer>
    </ContainerTouchable>
  );
}
