import React from 'react';
import MoviesClassComponent from './moviesClassComponent';
import MoviesFunctionalComponent from './moviesFunctionalComponent';

function Movie() {
  return (
    <div>
        <MoviesClassComponent />
        <hr />
        <MoviesFunctionalComponent />
    </div>
  )
}

export default Movie