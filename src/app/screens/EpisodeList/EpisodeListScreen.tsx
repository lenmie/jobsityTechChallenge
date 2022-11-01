import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Modal } from 'react-native';
import { Episode, Season } from '../../../models/show.interface';
import {
  getSeasonEpisodes,
  getShowSeasons,
} from '../../../services/TVMazeService';
import {
  Container,
  TouchableContainer,
  SelectorText,
  Option,
  OptionContainer,
  HeaderContainer,
} from './EpisodeListScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import EpisodeListScreenList from './EpisodeListScreenList';
import { colors } from '../../../constants/colors';

const { width, height } = Dimensions.get('screen');

const optionWidth = width * 0.8;
const selectorHeight = width * 0.12;

const PICK_A_SEASON = 'PICK A SEASON';

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
  return (
    <Container
      flex={1}
      bg={colors.primaryBlack}
      pb={20}
      opacity={isSelecting ? 0.5 : 1}>
      <HeaderContainer
        pl={2}
        flexDirection="row"
        alignItems="flex-end"
        justifyContent="space-around">
        <ButtonIcon onPress={() => navigation.pop()} name="arrow-left" />
        <TouchableContainer
          mt={20}
          mx={10}
          height={selectorHeight}
          width="70%"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          bg={colors.secondaryGrey}
          onPress={() => setIsSelecting(true)}>
          <>
            {!!selectedSeason ? (
              <SelectorText
                fontSize={13}
                color={colors.primaryWhite}
                fontFamily="Roboto-Bold">{`SEASON ${selectedSeason.number}`}</SelectorText>
            ) : (
              <>
                <SelectorText
                  fontSize={13}
                  color={colors.primaryWhite}
                  fontFamily="Roboto-Bold">
                  {PICK_A_SEASON}
                </SelectorText>
              </>
            )}
            <Icon size={25} color={colors.primaryWhite} name="chevron-down" />
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
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <Option
                  activeOpacity={0.7}
                  onPress={() => {
                    setIsSelecting(false);
                    setSelectedSeason({ ...item });
                  }}
                  mx={15}
                  width={optionWidth}
                  bg={colors.primaryBlack}
                  alignItems="center"
                  justifyContent="center"
                  height={40}>
                  <SelectorText
                    fontSize={17}
                    fontFamily="Roboto-Bold"
                    color={
                      colors.primaryWhite
                    }>{`SEASON ${item.number}`}</SelectorText>
                </Option>
              )}
            />
          )}
        </OptionContainer>
      </Modal>
      {selectedSeason && <EpisodeListScreenList episodes={episodes} />}
    </Container>
  );
}
