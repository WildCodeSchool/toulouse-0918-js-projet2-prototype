import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
const MovieList = ({ movies }) => (
  <div>

    <p style={{ textAlign: 'center' }}>
      <Link to="/add-movie" className="btn btn-primary my-2">Ajouter un film</Link>
    </p>

    <div className="row">
      {
        movies.map((m, idx) => <MovieCard key={idx} movie={m} />)
      }
    </div>
  </div>
)

export default MovieList;
