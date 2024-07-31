import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

const MovieItem = ({ movie, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Animatable.View animation="fadeIn" duration={800} style={styles.cardContainer}>
        <Card style={styles.card}>
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'transparent']}
            style={styles.gradient}
          >
            <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
          </LinearGradient>
          <Card.Content style={styles.content}>
            <View style={styles.header}>
              <Title style={styles.title}>{movie.title}</Title>
            </View>
            <Paragraph style={styles.subtitle}>Release Date: {movie.release_date}</Paragraph>
            <Paragraph style={styles.subtitle}>Rating: {movie.vote_average}</Paragraph>
          </Card.Content>
        </Card>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    width: width * 0.9,
  },
  card: {
    borderRadius: 10,
  },
  gradient: {
    height: 200,
    borderRadius: 10,
  },
  content: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MovieItem;
