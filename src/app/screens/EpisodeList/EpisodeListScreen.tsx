import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EpisodeListScreen({ route, navigation }) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id}</Text>
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
  profileImage: {
    height: 63,
    width: 63,
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
    fontWeight: '800',
    marginLeft: 25,
    marginBottom: 35,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '600',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 26,
    marginLeft: 26,
    marginBottom: 10,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
  },
  likeCount: {
    marginTop: 16,
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
