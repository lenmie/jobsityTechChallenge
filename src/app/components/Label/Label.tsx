import React from 'react';
import { Dimensions } from 'react-native';
import { colors } from '../../../constants/colors';
import { fontSizes } from '../../../constants/fontSizes';
import { Container, Title } from './Label.styled';
const { width } = Dimensions.get('screen');

const labelHeight = width * 0.1;
const labelWidth = width * 0.2;

interface Props {
  name: string;
}

export default function Label({ name }: Props) {
  return (
    <Container
      mx={1}
      height={labelHeight}
      width={labelWidth}
      borderRadius={20}
      justifyContent="center"
      alignItems="center"
      bg={colors.secondaryGrey}>
      <Title
        color={colors.primaryBlack}
        fontSize={fontSizes.medium}
        fontFamily="Roboto-Bold">
        {name}
      </Title>
    </Container>
  );
}
