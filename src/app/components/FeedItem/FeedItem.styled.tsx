import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  size,
  space,
  system,
  typography,
} from 'styled-system';

export const ContainerTouchable = styled.TouchableOpacity`
  ${space}
  ${flexbox}
`;

export const BackgroundImage = styled.ImageBackground`
  ${system({ resizeMode: 'cover' })}
  ${layout}
  ${size}
  ${space}
  ${border}
  ${flexbox}
`;

export const Gradient = styled(LinearGradient)`
  ${flexbox}
  ${space}
  ${border}
  ${position}
`;

export const Title = styled.Text`
  ${typography}
  ${color}
`;

export const Subtitle = styled.Text`
  ${typography}
  ${color}
`;

export const TextContainer = styled.View`
  ${flexbox}
  ${space}
`;
