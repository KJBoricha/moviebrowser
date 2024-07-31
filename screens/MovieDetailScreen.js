import React, { useEffect, useState } from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions } from 'react-native';
import { ActivityIndicator, Text, Card } from 'react-native-paper';
import { fetchMovieDetails } from '../services/api';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const MovieDetailScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
      setLoading(false);
    };

    fetchDetails();
  }, []);

  if (loading) {
    return <ActivityIndicator animating={true} size="large" style={styles.loader} />;
  }

  if (!movie) {
    return <Text>No details available.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#FFDEE9', '#B5FFFC']} style={styles.gradient}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
          <Card.Content style={styles.content}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.subtitle}>Release Date: {movie.release_date}</Text>
            <Text style={styles.subtitle}>Rating: {movie.vote_average}</Text>
            <Text style={styles.description}>{movie.overview}</Text>
          </Card.Content>
        </Card>
      </LinearGradient>
    </ScrollView>
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
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
    elevation: 6,
  },
  poster: {
    height: 300,
    borderRadius: 10,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieDetailScreen;
