import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '94c09d16448ecd6ad30fce2c9e06557d';

export const getMovieCast = movieId => {
  return axios(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};
