import React from 'react';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';
import { Show } from '../../../models/show.interface';
import {
  BackgroundImage,
  ContainerTouchable,
  Gradient,
  Subtitle,
  Title,
} from './FeedItem.styled';
import { TextContainer } from '../../screens/Detail/DetailScreen.styled';
import { HomeScreenNavigationProp } from '../../screens/Home/HomeScreen';

interface Props {
  item: Show;
  index: number;
}

export default function FeedItem({ item, index }: Props) {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ContainerTouchable
      onPress={() => navigation.push('Detail', item)}
      marginTop={index % 2 === 0 ? 0 : 30}>
      <BackgroundImage
        source={{ uri: item.image.original }}
        imageStyle={{ borderRadius: 10 }}
        width={width / 2.5}
        height={height / 3.75}
        marginLeft={15}
        borderRadius={10}>
        <Gradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          marginLeft={15}
          width={width / 2.5}
          height={height / 3.75}
          justifyContent="flex-end"
          borderRadius={10}>
          <TextContainer marginBottom={9} marginLeft={12}>
            <Title
              numberOfLines={1}
              fontSize={3}
              color="white"
              fontWeight="600">
              {item.name}
            </Title>
            <Subtitle
              numberOfLines={1}
              marginTop={5}
              fontSize={1}
              color="white"
              fontWeight="300">
              {item.type}
            </Subtitle>
          </TextContainer>
        </Gradient>
      </BackgroundImage>
    </ContainerTouchable>
  );
}
