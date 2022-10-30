import styled from '@emotion/native';
import {
  flexbox,
  layout,
  space,
  color,
  typography,
  border,
} from 'styled-system';

export const HomeScreenContainer = styled.View`
  ${layout}
  ${flexbox}
  ${color}
  ${space}
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
  ${color}
`;

export const SearchButton = styled.TouchableOpacity`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
`;
