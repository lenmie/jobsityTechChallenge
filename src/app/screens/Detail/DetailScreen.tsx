import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Dimensions } from 'react-native';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import {
  BackgroundImage,
  Container,
  Gradient,
  PosterAndTitleContainer,
  PosterImage,
  RatingContainer,
  Subtitle,
  TextContainer,
  Title,
} from './DetailScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Show } from '../../../models/show.interface';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
export const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const getShowSubtititle = (item: Show) =>
  `${item.premiered.slice(0, 4)} - ${item.status}\n${item.genres
    .slice(0, 2)
    .join(', ')}\n${item.network?.country.name}`;

export default function DetailScreen({ route, navigation }: Props) {
  const item = route.params;
console.log(item.rating);

  return (
    <Container flex={1}>
      <BackgroundImage
        blurRadius={20}
        resizeMode="cover"
        source={{ uri: item.image.original }}
        height={350}
        justifyContent="flex-end">
        <Gradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          width="100%"
          height="100%"
          justifyContent="flex-end"
          borderRadius={10}>
          <PosterAndTitleContainer flexDirection="row" mb={20}>
            <PosterImage
              resizeMode="contain"
              ml={20}
              source={{ uri: item.image.original }}
              height={250}
              width={150}
              borderRadius={10}
            />
            <TextContainer
              width={'40%'}
              justifyContent="space-around"
              ml={26}
              color="red">
              <Title fontSize={20} color="white" fontFamily="Roboto-Bold">
                {item.name}
              </Title>
              <Subtitle fontSize={15} color="white" fontFamily="Roboto-Light">
                {getShowSubtititle(item)}
              </Subtitle>
              {item.rating.average && (
                <RatingContainer flexDirection="row" alignItems="center">
                  <Icon size={20} color="white" name="star" />
                  <Subtitle
                    ml={1}
                    fontSize={15}
                    color="white"
                    fontFamily="Roboto-Light">
                    {`${item.rating.average}/10`}
                  </Subtitle>
                </RatingContainer>
              )}
              <ButtonIcon onPress={() => {}} name="heart" />
            </TextContainer>
          </PosterAndTitleContainer>
        </Gradient>
      </BackgroundImage>
      <TextContainer marginBottom={63} marginLeft={26} color="red">
        <Title
          numberOfLines={2}
          fontSize={42}
          color="white"
          fontWeight="800"
          fontFamily="MuseoSans">
          {item.name}
        </Title>
        <Subtitle
          numberOfLines={1}
          marginTop={8}
          fontSize={10}
          color="white"
          fontWeight="300">
          {`${item.type} votos`}
        </Subtitle>
        <Button
          title="episode list"
          onPress={() => navigation.push('EpisodeList', { id: item.id })}
        />
      </TextContainer>
    </Container>
  );
}
