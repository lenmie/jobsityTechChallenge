import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
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
} from './EpisodeListScreen.styled';

export default function EpisodeListScreen({ route, navigation }) {
  const [selected, setSelected] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  console.log(seasons);

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
    <Container flex={1}>
      <TouchableContainer
        height={60}
        mx={15}
        mt={15}
        alignItems="center"
        justifyContent="center"
        borderWidth={2}
        borderRadius={20}
        borderColor="black"
        onPress={() => setSelected(!selected)}>
        <>
          {!!selectedSeason ? (
            <SelectorText
              fontSize={16}>{`Season ${selectedSeason.number}`}</SelectorText>
          ) : (
            <SelectorText fontSize={16}>Seleccione Season</SelectorText>
          )}
        </>
      </TouchableContainer>
      <OptionContainer position="absolute" top={75} zIndex={1} width="100%">
        {selected && (
          <FlatList
            data={seasons}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Option
                onPress={() => {
                  setSelected(false);
                  setSelectedSeason({ ...item });
                }}
                mx={15}
                bg={'grey'}
                alignItems="center"
                justifyContent="center"
                height={40}>
                <SelectorText
                  fontSize={20}
                  color={'blue'}>{`Season ${item.number}`}</SelectorText>
              </Option>
            )}
          />
        )}
      </OptionContainer>
      {selectedSeason && (
        <FlatList
          data={episodes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <EpisodeRow
              mx={15}
              mt={15}
              bg={'grey'}
              alignItems="center"
              justifyContent="center">
              <SelectorText
                fontSize={20}
                color={'blue'}>{`Episode ${item.number}`}</SelectorText>
              <SelectorText
                fontSize={15}
                color={'blue'}>{`${item.summary}`}</SelectorText>
            </EpisodeRow>
          )}
        />
      )}
    </Container>
  );
}
