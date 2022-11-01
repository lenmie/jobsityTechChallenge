import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import { Container, SeeEpisodesButton, Title } from './DetailScreen.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../constants/colors';
import DetailScreenSummary from './DetailScreenSummary';
import DetailScreenInfo from './DetailScreenInfo';
import { fontSizes } from '../../../constants/fontSizes';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;
export type DetailScreenNavigationProp = Props['navigation'];

const GO_TO_EPISODES = 'SEASONS AND EPISODES';

export default function DetailScreen({ route, navigation }: Props) {
  const item = route.params;

  return (
    <Container flex={1} bg={colors.primaryBlack} pb={20}>
      <DetailScreenInfo show={item} />
      <DetailScreenSummary show={item} />
      <SeeEpisodesButton
        mt={20}
        mx={10}
        height={45}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        bg={colors.secondaryGrey}
        onPress={() => navigation.push('EpisodeList', { id: item.id })}>
        <Title
          mr={10}
          numberOfLines={2}
          fontSize={fontSizes.medium}
          color={colors.primaryWhite}
          fontFamily="Roboto-Bold">
          {GO_TO_EPISODES}
        </Title>
        <Icon size={20} color={colors.primaryWhite} name="arrow-right" />
      </SeeEpisodesButton>
    </Container>
  );
}
