import axios from 'axios';

const API_KEY = 'fde351beacdb11cacb6e800378e8c810';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
