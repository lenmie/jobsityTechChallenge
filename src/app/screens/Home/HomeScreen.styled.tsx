import styled from '@emotion/native';
import { flexbox, layout, space, color, typography } from 'styled-system';

export const HomeScreenContainer = styled.View`
  ${layout}
  ${flexbox}
`;

export const HeaderContainer = styled.View`
  ${layout}
  ${flexbox}
  ${color}
`;

export const Title = styled.Text`
  ${space}
  ${typography}
  ${flexbox}
`;
