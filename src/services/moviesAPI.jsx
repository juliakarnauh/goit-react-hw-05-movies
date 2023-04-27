import axios from 'axios';
const KEY = '9016e2013ea080320685a54b31899448';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovies() {
  const response = await axios(`trending/all/day`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMoviesBySearch(query) {
  const response = await axios(`search/movie?query=${query}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMoviesById(id) {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}
export async function fetchMoviesCast(id) {
  const response = await axios(`movie/${id}/credits?`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.cast;
}
export async function fetchMoviesReview(id) {
  const response = await axios(`movie/${id}/reviews?`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}