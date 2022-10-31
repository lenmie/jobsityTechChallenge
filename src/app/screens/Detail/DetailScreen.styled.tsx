import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  system,
  typography,
} from 'styled-system';

export const Container = styled.View`
  ${flexbox}
  ${color}
  ${space}
`;

export const BackgroundImage = styled.ImageBackground`
  ${system({
    resizeMode: {
      property: 'resizeMode',
      properties: ['cover', 'stretch', 'contain', 'center'],
    },
  })}
  ${layout}
  ${space}
  ${flexbox}
`;

export const PosterImage = styled.Image`
  ${system({
    resizeMode: {
      property: 'resizeMode',
      properties: ['cover', 'stretch', 'contain', 'center'],
    },
  })}
  ${layout}
  ${space}
  ${border}
`;

export const PosterAndTitleContainer = styled.View`
  ${layout}
  ${flexbox}
  ${space}
`;

export const Gradient = styled(LinearGradient)`
  ${flexbox}
  ${space}
`;

export const TextContainer = styled.View`
  ${space}
  ${color}
  ${flexbox}
`;

export const Title = styled.Text`
  ${typography}
  ${color}
  ${space}
`;

export const Subtitle = styled.Text`
  ${typography}
  ${color}
  ${space}
`;

export const RatingContainer = styled.View`
  ${flexbox}
  ${space}
`;

export const LabelContainer = styled.View`
  ${flexbox}
  ${space}
`;

export const SeeEpisodesButton = styled.TouchableOpacity`
  ${flexbox}
  ${space}
  ${color}
  ${layout}
`;
