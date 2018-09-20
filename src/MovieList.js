import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
const MovieList = ({ movies }) => (
  <div className="row">
    {
      movies.map((m, idx) => <MovieCard key={idx} movie={m} />)
    }
  </div>
)

export default MovieList;
