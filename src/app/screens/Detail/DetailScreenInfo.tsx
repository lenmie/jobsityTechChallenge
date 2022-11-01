import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import {
  BackgroundImage,
  Gradient,
  PosterAndTitleContainer,
  PosterImage,
  RatingContainer,
  Subtitle,
  TextContainer,
  Title,
} from './DetailScreenInfo.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Show } from '../../../models/show.interface';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { getShowSubtititle } from '../../../utils/utils';
import { DetailScreenNavigationProp } from './DetailScreen';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../constants/colors';
import { fontSizes } from '../../../constants/fontSizes';

const { width, height } = Dimensions.get('screen');

const backgroundImageHeight = height * 0.35;
const posterImageHeight = height * 0.25;
const posterImageWidth = width * 0.38;

interface Props {
  show: Show;
}

export default function DetailScreenInfo({ show }: Props) {
  const [isFavorited, setIsFavorited] = useState<boolean>(true);
  const toogleFavorite = () => setIsFavorited(!isFavorited);

  const navigation = useNavigation<DetailScreenNavigationProp>();

  return (
    <BackgroundImage
      blurRadius={20}
      resizeMode="cover"
      source={{ uri: show.image.original }}
      height={backgroundImageHeight}
      justifyContent="flex-end">
      <Gradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(27, 27, 27, 1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        width="100%"
        height="100%"
        pl={20}
        justifyContent="flex-end"
        borderRadius={10}>
        <ButtonIcon onPress={() => navigation.pop()} name="arrow-left" />
        <PosterAndTitleContainer flexDirection="row" mb={20} mt={10}>
          <PosterImage
            resizeMode="contain"
            source={{ uri: show.image.original }}
            height={posterImageHeight}
            width={posterImageWidth}
            borderRadius={10}
          />
          <TextContainer width={'40%'} justifyContent="space-around" ml={26}>
            <Title
              fontSize={fontSizes.big}
              color={colors.primaryWhite}
              fontFamily="Roboto-Bold">
              {show.name}
            </Title>
            <Subtitle
              fontSize={fontSizes.medium}
              color={colors.primaryWhite}
              fontFamily="Roboto-Light">
              {getShowSubtititle(show)}
            </Subtitle>
            {show.rating.average && (
              <RatingContainer flexDirection="row" alignItems="center">
                <Icon size={20} color={colors.primaryWhite} name="star" />
                <Subtitle
                  ml={1}
                  fontSize={fontSizes.medium}
                  color={colors.primaryWhite}
                  fontFamily="Roboto-Light">
                  {`${show.rating.average}/10`}
                </Subtitle>
              </RatingContainer>
            )}
            {isFavorited ? (
              <ButtonIcon onPress={toogleFavorite} name="heart" />
            ) : (
              <ButtonIcon onPress={toogleFavorite} name="heart-outline" />
            )}
          </TextContainer>
        </PosterAndTitleContainer>
      </Gradient>
    </BackgroundImage>
  );
}
