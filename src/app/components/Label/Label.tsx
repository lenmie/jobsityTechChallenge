import React from 'react';
import { Container, Title } from './Label.styled';

interface Props {
  name: string;
}

export default function Label({ name }: Props) {
  return (
    <Container
      mx={1}
      height={35}
      width={75}
      borderRadius={20}
      justifyContent="center"
      alignItems="center"
      bg="grey">
      <Title color="black" fontSize={12} fontFamily="Roboto-Bold">
        {name}
      </Title>
    </Container>
  );
}
