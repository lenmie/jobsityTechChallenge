import styled from '@emotion/native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

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
`;

export const Container = styled.TouchableOpacity`
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
