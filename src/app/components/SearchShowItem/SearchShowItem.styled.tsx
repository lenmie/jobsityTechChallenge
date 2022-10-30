import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  border,
  color,
  flexbox,
  layout,
  size,
  space,
  system,
  typography,
} from 'styled-system';

export const ContainerTouchable = styled.TouchableOpacity`
  ${space}
  ${flexbox}
`;

export const ShowImage = styled.Image`
  ${system({ resizeMode: 'cover' })}
  ${layout}
  ${size}
  ${space}
  ${border}
`;

export const Gradient = styled(LinearGradient)`
  ${flexbox}
  ${space}
  ${border}
`;

export const Title = styled.Text`
  ${typography}
  ${color}
`;

export const Subtitle = styled.Text`
  ${typography}
  ${color}
`;
