import React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import FeedItem from '../components/FeedItem';


export default function ProfileScreen({ route, navigation }) {
  const user = route.params.user;

  const [shows, setShows] = useState([]);

  useEffect(() => {
    const randomShows = unsplash.shows.getRandom({
      count: 6,
      username: user.username,
    });
    randomShows.then(result => {
      if (result.type === 'success') {
        setShows(result.response);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: 100,
          width: 50,
          height: 50,
        }}></TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: user['profile_image'].small }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.profileName}>{user.name}</Text>
          <Text numbeOfLines={3} style={styles.subtitle}>
            {user.bio}
          </Text>
        </View>
      </View>
      <Text style={styles.title}>My Shows</Text>

      {shows && (
        <FlatList
          numColumns={2}
          data={shows}
          renderItem={({ item, index }) => (
            <FeedItem item={item} index={index} />
          )}
        />
      )}
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
  },
});
