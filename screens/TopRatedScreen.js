import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { fetchMovies } from '../services/api';
import MovieItem from '../components/MovieItem';

const TopRatedScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const data = await fetchMovies('top_rated');
      setMovies(data);
      setLoading(false);
    };

    fetchTopRatedMovies();
  }, []);

  const onChangeSearch = (query) => setSearchQuery(query);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieItem movie={item} onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })} />
        )}
        contentContainerStyle={styles.list}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbar: {
    marginBottom: 10,
    borderRadius: 20,
    elevation: 4,
  },
  list: {
    paddingBottom: 20,
  },
});

export default TopRatedScreen;
