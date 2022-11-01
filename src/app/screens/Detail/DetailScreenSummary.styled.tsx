import styled from '@emotion/native';
import { color, flexbox, space, typography } from 'styled-system';

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

export const LabelContainer = styled.View`
  ${flexbox}
  ${space}
`;
