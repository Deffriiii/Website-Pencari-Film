import React, { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from './api';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await getPopularMovies();
      setMovies(movies);
      setLoading(false);
    };

    fetchPopularMovies();
  }, []);

  const handleSearch = async (query) => {
    if (query) {
      const results = await searchMovies(query);
      setMovies(results);
    } else {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);  // Set movie yang dipilih
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">MOVIESTAN</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tvshows">Tv Shows</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#upcoming">Upcoming</a></li>
          </ul>
        </nav>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </header>

      <main>
      <SearchBar onSearch={handleSearch} />
      {/* Banner section untuk film yang dipilih */}
      
      {selectedMovie && (
        <div className="movie-banner">
          <img src={`${process.env.REACT_APP_BASEIMGURL}${selectedMovie.backdrop_path}`} alt={selectedMovie.title} />
          <div className="banner-details">
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      )}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onMovieClick={handleMovieClick} />
          ))}
        </div>
      )}
      </main>
    </div>
  );
};

export default App;
