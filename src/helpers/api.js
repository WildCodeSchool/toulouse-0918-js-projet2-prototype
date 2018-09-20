import axios from 'axios';

const apiRoot = 'https://api.themoviedb.org/3'

export const getToken = apiKey =>
  axios.get(`${apiRoot}/authentication/token/new?api_key=${apiKey}`)
    .then(({ data }) => data)

export const searchMovies = (query, apiKey) =>
  axios.get(`${apiRoot}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
    .then(({ data }) => data)