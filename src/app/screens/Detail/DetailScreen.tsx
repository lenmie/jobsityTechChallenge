import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions } from 'react-native';
import { RootStackParamList } from '../../../navigation/AppNavigator';
import {
  BackgroundImage,
  Container,
  Gradient,
  Subtitle,
  TextContainer,
  Title,
} from './DetailScreen.styled';
export const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route, navigation }: Props) {
  const item = route.params;

  return (
    <Container flex={1}>
      <BackgroundImage
        source={{ uri: item.image.original }}
        height={height}
        width={width}>
        <Gradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          flex={1}
          justifyContent="flex-end">
          <TextContainer marginBottom={63} marginLeft={26} color="red">
            <Title
              numberOfLines={2}
              fontSize={42}
              color="white"
              fontWeight="800"
              fontFamily="MuseoSans">
              {item.name}
            </Title>
            <Subtitle
              numberOfLines={1}
              marginTop={8}
              fontSize={10}
              color="white"
              fontWeight="300">
              {`${item.type} votos`}
            </Subtitle>
          </TextContainer>
        </Gradient>
      </BackgroundImage>
    </Container>
  );
}
