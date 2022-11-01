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

export const Container = styled.View`
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
  ${border}
`;

export const OptionContainer = styled.View`
  ${flexbox}
  ${layout}
  ${space}
  ${color}
  ${position}
`;
