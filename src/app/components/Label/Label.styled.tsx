import styled from '@emotion/native';
import {
  flexbox,
  layout,
  space,
  color,
  border,
  typography,
} from 'styled-system';

export const Container = styled.View`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
`;

export const Title = styled.Text`
  ${color}
  ${typography}
`;
