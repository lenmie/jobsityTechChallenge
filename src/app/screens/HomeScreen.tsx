import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { Show } from '../../models/show.interface';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { getShows } from '../../services/TVMazeService';
import FeedItem from '../components/FeedItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [shows, setShows] = useState<Show[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getShows(page).then(newShows => setShows([...shows, ...newShows]));
  }, [page, shows]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
      </View>
      {!!shows.length && (
        <FlatList
          numColumns={2}
          data={shows}
          renderItem={({ item, index }) => (
            <FeedItem item={item} index={index} />
          )}
          onEndReached={() => setPage(page + 1)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 118,
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    marginTop: 53,
    marginLeft: 111,
    fontFamily: 'MuseoSans',
  },
  linesIcon: {
    marginTop: 65,
    marginLeft: 26,
  },
  container: {
    flex: 1,
  },
});
