import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Episode } from '../../../models/show.interface';
import {
  SelectorText,
  EpisodeRow,
  EpisodeImage,
  NoEpisodeImage,
  EpisodeImageAndTitleContainer,
  TitleAndRuntimeContainer,
} from './EpisodeListScreenList.styled';
import { cleanTextFromTags } from '../../../utils/utils';
import { colors } from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('screen');

interface Props {
  episodes: Episode[];
}

const episodeImageHeight = height * 0.09;
const episodeImageWidth = width * 0.38;

export default function EpisodeListScreenList({ episodes }: Props) {
  return (
    <FlatList
      data={episodes}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <EpisodeRow
          opacity={1}
          mx={15}
          mt={20}
          bg={colors.primaryBlack}
          alignItems="center"
          justifyContent="center">
          <EpisodeImageAndTitleContainer width="100%" flexDirection="row">
            {!!item.image && !!item.image.original ? (
              <EpisodeImage
                resizeMode="contain"
                source={{ uri: item.image.original }}
                height={episodeImageHeight}
                width={episodeImageWidth}
              />
            ) : (
              <NoEpisodeImage
                justifyContent="center"
                alignItems="center"
                bg={colors.primaryGrey}
                height={episodeImageHeight}
                width={episodeImageWidth}>
                <Icon size={25} color={colors.primaryWhite} name="image-off" />
              </NoEpisodeImage>
            )}
            <TitleAndRuntimeContainer ml={2}>
              <SelectorText
                fontSize={20}
                fontFamily="Roboto-Bold"
                color={
                  colors.primaryWhite
                }>{`Episode ${item.number}`}</SelectorText>
              <SelectorText
                fontSize={12}
                fontFamily="Roboto-Italic"
                color={
                  colors.primaryWhite
                }>{`${item.runtime} minutes`}</SelectorText>
            </TitleAndRuntimeContainer>
          </EpisodeImageAndTitleContainer>
          <SelectorText
            fontFamily="Roboto-Light"
            fontSize={15}
            color={colors.primaryWhite}>{`${
            !!item.summary ? cleanTextFromTags(item.summary) : 'no episode info'
          }`}</SelectorText>
        </EpisodeRow>
      )}
    />
  );
}
