import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Dimensions, FlatList, ScrollView } from 'react-native';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import {
  BackgroundImage,
  Container,
  Gradient,
  LabelContainer,
  PosterAndTitleContainer,
  PosterImage,
  RatingContainer,
  SeeEpisodesButton,
  Subtitle,
  TextContainer,
  Title,
} from './DetailScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Show } from '../../../models/show.interface';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Label from '../../components/Label/Label';

export const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const regex = /(<p>|<\/p>|<b>|<\/b>)/g;

const getShowSubtititle = (item: Show) =>
  `${item.premiered.slice(0, 4)} - ${item.status}\n${item.genres
    .slice(0, 2)
    .join(', ')}\n${item.network?.country.name}`;

export default function DetailScreen({ route, navigation }: Props) {
  const item = route.params;

  return (
    <Container flex={1} bg={'#1b1b1b'} pb={20}>
      <BackgroundImage
        blurRadius={20}
        resizeMode="cover"
        source={{ uri: item.image.original }}
        height={350}
        justifyContent="flex-end">
        <Gradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(27, 27, 27, 1)']}
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
      <ScrollView>
        <TextContainer mx={20}>
          <Title
            numberOfLines={2}
            fontSize={20}
            color="white"
            fontFamily="Roboto-LightItalic">
            Summary
          </Title>
          <Subtitle mt={10} fontSize={15} color="white" fontFamily="Roboto">
            {item.summary.replaceAll(regex, '')}
          </Subtitle>
          {!!item.schedule.days.length && (
            <>
              <Subtitle mt={10} fontSize={15} color="white" fontFamily="Roboto">
                Airing on
              </Subtitle>
              <LabelContainer flexDirection="row" my={2}>
                <FlatList
                  data={item.schedule.days}
                  keyExtractor={day => day}
                  renderItem={({ item }) => <Label key={item} name={item} />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </LabelContainer>
              <Subtitle
                fontSize={15}
                color="white"
                fontFamily="Roboto-LightItalic">
                {`at ${item.schedule.time}hs`}
              </Subtitle>
            </>
          )}
        </TextContainer>
        <SeeEpisodesButton
          mt={20}
          mx={10}
          height={45}
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          bg="grey"
          onPress={() => navigation.push('EpisodeList', { id: item.id })}>
          <Title
            mr={10}
            numberOfLines={2}
            fontSize={13}
            color="white"
            fontFamily="Roboto-Bold">
            SEASONS AND EPISODES
          </Title>
          <Icon size={20} color="white" name="arrow-right" />
        </SeeEpisodesButton>
      </ScrollView>
    </Container>
  );
}
