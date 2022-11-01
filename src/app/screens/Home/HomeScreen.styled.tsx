import styled from '@emotion/native';
import { flexbox, layout, space, color, typography } from 'styled-system';

export const HomeScreenContainer = styled.View`
  ${flexbox}
  ${color}
`;

export const HeaderContainer = styled.View`
  ${layout}
  ${flexbox}
  ${color}
  ${space}
`;

export const Title = styled.Text`
  ${space}
  ${typography}
  ${flexbox}
  ${color}
`;

export const ListContainer = styled.View`
  ${flexbox}
`;
