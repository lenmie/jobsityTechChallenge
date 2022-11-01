import styled from '@emotion/native';
import {
  flexbox,
  layout,
  space,
  color,
  typography,
  border,
} from 'styled-system';

export const SearchScreenContainer = styled.View`
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

export const SearchBar = styled.View`
  ${layout}
  ${flexbox}
  ${color}
  ${space}
`;

export const SearchInput = styled.TextInput`
  ${space}
  ${typography}
  ${flexbox}
  ${color}
`;

export const SearchIcon = styled.View`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}
`;

export const ResultsContainer = styled.View`
  ${layout}
  ${flexbox}
  ${color}
  ${space}
`;
