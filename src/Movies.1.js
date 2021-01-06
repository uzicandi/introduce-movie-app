import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [limit, setlimit] = useState(4);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(null);
        setMovies(null);
        setLoading(true);
        const response = await axios.get(
          'https://yts.mx/api/v2/list_movies.json?limit=' + limit
        );
        setMovies(response.data.data.movies);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!movies) return null;
  console.log('movies', movies);

  return (
    <ul className="content-container">
      {movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default Movies;
