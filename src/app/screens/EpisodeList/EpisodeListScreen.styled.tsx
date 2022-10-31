import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  system,
  typography,
} from 'styled-system';

export const HeaderContainer = styled.View`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
`;

export const TouchableContainer = styled.TouchableOpacity`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${border}
`;

export const SelectorText = styled.Text`
  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

export const Container = styled.ScrollView`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
`;

export const EpisodeRow = styled.View`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
`;

export const Option = styled.TouchableOpacity`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${position}
`;

export const OptionContainer = styled.View`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${position}
`;

export const Gradient = styled.View`
  ${flexbox}
  ${color}
`;

export const EpisodeImage = styled.Image`
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

export const NoEpisodeImage = styled.View`
  ${layout}
  ${space}
  ${border}
`;

export const EpisodeImageAndTitleContainer = styled.View`
  ${layout}
  ${space}
  ${flexbox}
`;

export const TitleAndRuntimeContainer = styled.View`
  ${layout}
  ${space}
  ${flexbox}
`;
