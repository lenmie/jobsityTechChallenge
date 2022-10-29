import styled from '@emotion/native';
import LinearGradient from 'react-native-linear-gradient';
import { color, flexbox, layout, space, typography } from 'styled-system';

export const Container = styled.View`
  ${flexbox}
`;

export const BackgroundImage = styled.ImageBackground`
  ${layout}
`;

export const Gradient = styled(LinearGradient)`
  ${flexbox}
`;

export const TextContainer = styled.View`
  ${space}
  ${color}
`;

export const Title = styled.Text`
  ${typography}
  ${color}
`;

export const Subtitle = styled.Text`
  ${typography}
  ${color}
`;
