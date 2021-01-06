import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useScroll = () => {
  const [limit, setLimit] = useState(4);
  const onScroll = () => {
    setLimit(limit + 4);

    console.log('limit', limit + limit);
    console.log('scroll');
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return limit;
};

// const fetchMovies = async () => {
//   const {
//     data: {
//       data: { movies }
//     }
//   } = await axios.get(
//     `https://yts.mx/api/v2/list_movies.json?limit=${limit}`
//   );
//   return setMovies({ movies });
// };

function Movies() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const limit = useScroll();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(null);
        setMovies(null);
        setLoading(true);
        console.log('limit2 ', limit);
        const response = await axios.get(
          `https://yts.mx/api/v2/list_movies.json?limit=${limit}`
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
    <ul className="content-container" style={{ height: '1000vh' }}>
      {movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default Movies;
