import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Show } from '../../../models/show.interface';
import {
  BackgroundImage,
  ContainerTouchable,
  Gradient,
  Subtitle,
  TextContainer,
  Title,
} from './FeedItem.styled';
import { HomeScreenNavigationProp } from '../../screens/Home/HomeScreen';
import { fontSizes } from '../../../constants/fontSizes';
import { colors } from '../../../constants/colors';

interface Props {
  item: Show;
  index: number;
}

export default function FeedItem({ item, index }: Props) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ContainerTouchable
      onPress={() => navigation.push('Detail', item)}
      mt={index % 2 === 0 ? 0 : 30}
      mx={10}>
      <BackgroundImage
        source={{ uri: item.image.original }}
        imageStyle={{ borderRadius: 10 }}
        justifyContent="flex-end"
        width={180}
        height={260}
        borderRadius={10}>
        <Gradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          width="100%"
          height="40%"
          justifyContent="flex-end"
          borderRadius={10}>
          <TextContainer ml={10} mb={15}>
            <Title
              numberOfLines={1}
              fontSize={fontSizes.small}
              fontFamily="Roboto-Bold"
              color={colors.primaryWhite}>
              {item.name}
            </Title>
            <Subtitle
              numberOfLines={1}
              marginTop={5}
              fontSize={fontSizes.xsmall}
              fontFamily="Roboto-LightItalic"
              color={colors.primaryWhite}>
              {item.genres[0]}
            </Subtitle>
          </TextContainer>
        </Gradient>
      </BackgroundImage>
    </ContainerTouchable>
  );
}
