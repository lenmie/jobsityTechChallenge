import React from 'react';
import { TouchableContainer } from './ButtonIcon.styled';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../../constants/colors';

interface Props {
  onPress: Function;
  name: string;
}

export default function ButtonIcon({ onPress, name }: Props) {
  return (
    <TouchableContainer
      onPress={onPress}
      height={50}
      width={50}
      borderRadius={40}
      justifyContent="center"
      alignItems="center"
      bg="#303030">
      <Icon size={30} color={colors.primaryWhite} name={name} />
    </TouchableContainer>
  );
}
