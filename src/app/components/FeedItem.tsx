import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';
import { Show } from '../../models/show.interface';

interface Props {
  item: Show;
  index: number;
}

export default function FeedItem({ item, index }: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', item)}
      style={{ marginTop: index % 2 === 0 ? 0 : 30 }}>
      <ImageBackground
        source={{ uri: item.image.original }}
        imageStyle={{ borderRadius: 10 }}
        style={styles.imageBackground}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.linearGradient}>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.likeCount}>
              {item.type}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: width / 2.5,
    height: height / 3.75,
    marginLeft: 26,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  textContainer: {
    marginBottom: 9,
    marginLeft: 12,
  },
  title: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
  },
  likeCount: {
    marginTop: 5,
    fontSize: 8,
    color: 'white',
    fontWeight: '300',
  },
});
