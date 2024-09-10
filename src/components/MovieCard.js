import React from 'react';

const MovieCard = ({ movie, onMovieClick }) => {
  const imageUrl = `${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`;

  return (
    <div className="movie-card" onClick={() => onMovieClick(movie)}>
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
