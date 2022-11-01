import styled from '@emotion/native';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  system,
  typography,
} from 'styled-system';

export const SelectorText = styled.Text`
  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

export const EpisodeRow = styled.View`
  ${flexbox}
  ${layout}
  ${space}
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
  ${color}
  ${flexbox}
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
