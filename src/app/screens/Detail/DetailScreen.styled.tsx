import styled from '@emotion/native';
import {
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

export const Title = styled.Text`
  ${typography}
  ${color}
  ${space}
`;
export const SeeEpisodesButton = styled.TouchableOpacity`
  ${flexbox}
  ${space}
  ${color}
  ${layout}
`;
