import styled from '@emotion/native';
import {
  border,
  color,
  flexbox,
  layout,
  size,
  space,
  typography,
} from 'styled-system';

export const ContainerTouchable = styled.TouchableOpacity`
  ${space}
  ${flexbox}
`;

export const ShowImage = styled.Image`
  ${layout}
  ${size}
  ${space}
  ${border}
`;

export const Title = styled.Text`
  ${typography}
  ${color}
  ${layout}
`;

export const Subtitle = styled.Text`
  ${typography}
  ${color}
`;

export const TextContainer = styled.View`
  ${space}
  ${color}
  ${flexbox}
`;
