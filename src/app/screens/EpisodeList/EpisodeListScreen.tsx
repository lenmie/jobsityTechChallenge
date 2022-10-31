import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Modal } from 'react-native';
import { Episode, Season } from '../../../models/show.interface';
import {
  getSeasonEpisodes,
  getShowSeasons,
} from '../../../services/TVMazeService';
import { Container } from '../Detail/DetailScreen.styled';
import {
  TouchableContainer,
  SelectorText,
  Option,
  EpisodeRow,
  OptionContainer,
  HeaderContainer,
  EpisodeImage,
  NoEpisodeImage,
  EpisodeImageAndTitleContainer,
  TitleAndRuntimeContainer,
} from './EpisodeListScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { cleanTextFromTags } from '../../../utils/utils';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('screen');

type Props = NativeStackScreenProps<RootStackParamList, 'EpisodeList'>;
export type EpisodeScreenNavigationProp = Props['navigation'];

export default function EpisodeListScreen({ route, navigation }: Props) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const { id } = route.params;
  useEffect(() => {
    getShowSeasons(id).then(result => setSeasons(result));
  }, [id]);

  useEffect(() => {
    if (selectedSeason) {
      getSeasonEpisodes(selectedSeason.id).then(data => setEpisodes(data));
    }
  }, [selectedSeason]);
  //bg={isSelecting ? 'rgba(25,25,25,0.5)' : 'rgba(25,25,25,1)'}>
  return (
    <Container flex={1} bg={'#1b1b1b'} pb={20} opacity={isSelecting ? 0.5 : 1}>
      <HeaderContainer
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="space-around">
        <ButtonIcon onPress={() => navigation.pop()} name="arrow-left" />
        <TouchableContainer
          mt={20}
          mx={10}
          height={45}
          width="70%"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          bg="grey"
          onPress={() => setIsSelecting(true)}>
          <>
            <Icon size={25} color="black" name="chevron-down" />
            {!!selectedSeason ? (
              <SelectorText
                fontSize={13}
                color="white"
                fontFamily="Roboto-Bold">{`SEASON ${selectedSeason.number}`}</SelectorText>
            ) : (
              <>
                <SelectorText
                  fontSize={13}
                  color="white"
                  fontFamily="Roboto-Bold">
                  PICK A SEASON
                </SelectorText>
              </>
            )}
          </>
        </TouchableContainer>
      </HeaderContainer>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isSelecting}
        onRequestClose={() => setIsSelecting(false)}>
        <OptionContainer
          justifyContent="center"
          alignItems="center"
          mt={200}
          maxHeight={height * 0.5}>
          {isSelecting && (
            <FlatList
              data={seasons}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Option
                  onPress={() => {
                    setIsSelecting(false);
                    setSelectedSeason({ ...item });
                  }}
                  mx={15}
                  width={width * 0.8}
                  bg={'black'}
                  alignItems="center"
                  justifyContent="center"
                  height={40}>
                  <SelectorText
                    fontSize={17}
                    fontFamily="Roboto-Bold"
                    color={'white'}>{`SEASON ${item.number}`}</SelectorText>
                </Option>
              )}
            />
          )}
        </OptionContainer>
      </Modal>
      {selectedSeason && (
        <FlatList
          data={episodes}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <EpisodeRow
              opacity={1}
              mx={15}
              mt={20}
              bg={'#1b1b1b'}
              alignItems="center"
              justifyContent="center">
              <EpisodeImageAndTitleContainer width="100%" flexDirection="row">
                {!!item.image && !!item.image.original ? (
                  <EpisodeImage
                    resizeMode="contain"
                    source={{ uri: item.image.original }}
                    height={80}
                    width={150}
                  />
                ) : (
                  <NoEpisodeImage height={80} width={150} />
                )}
                <TitleAndRuntimeContainer>
                  <SelectorText
                    fontSize={20}
                    fontFamily="Roboto-Bold"
                    color={'white'}>{`Episode ${item.number}`}</SelectorText>
                  <SelectorText
                    fontSize={12}
                    fontFamily="Roboto-Italic"
                    color={'white'}>{`${item.runtime} minutes`}</SelectorText>
                </TitleAndRuntimeContainer>
              </EpisodeImageAndTitleContainer>
              <SelectorText
                fontFamily="Roboto-Light"
                fontSize={15}
                color={'white'}>{`${
                !!item.summary
                  ? cleanTextFromTags(item.summary)
                  : 'no episode info'
              }`}</SelectorText>
            </EpisodeRow>
          )}
        />
      )}
    </Container>
  );
}
