import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Animated,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../navigation/AppNavigator';
export const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route, navigation }: Props) {
  const item = route.params;

  const animatedValue = new Animated.Value(0);

  const textAnimation = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [700, 1],
  });

  const transform = [{ translateX }];

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: item.image.original }}
        style={styles.imageBackground}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.linearGradient}>
          <View style={styles.textContainer}>
            <Animated.Text
              numberOfLines={2}
              style={[styles.title, { transform, opacity }]}>
              {item.name}
            </Animated.Text>
            <Text numberOfLines={1} style={styles.likeCount}>
              {`${item.type} votos`}
            </Text>
            {/* <TouchableOpacity
              style={styles.profileContainer}
              onPress={() =>
                navigation.navigate('Detail', { user: item.ca })
              }>
              <Image
                source={{ uri: item.user['profile_image'].small }}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.profileName}>{item.user.name}</Text>
                <Text style={styles.subtitle}>View profile</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    height: 37,
    width: 37,
    marginTop: 59,
    marginLeft: 26,
  },
  imageBackground: {
    height: height,
    width: width,
  },
  profileImage: {
    height: 37,
    width: 37,
    borderRadius: 90,
    marginRight: 8,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textContainer: {
    marginBottom: 63,
    marginLeft: 26,
  },
  title: {
    fontSize: 42,
    color: 'white',
    fontWeight: '800',
    fontFamily: 'MuseoSans',
  },
  profileName: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 26,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 10,
    color: 'white',
    fontWeight: '300',
  },
  likeCount: {
    marginTop: 16,
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
  },
});
