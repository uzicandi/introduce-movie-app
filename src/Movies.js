import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import styled from 'styled-components';

const MovieList = styled.div`
  .movies {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px;
    padding-top: 70px;
  }
`;

const useScroll = () => {
  const [limit, setLimit] = useState(4);
  const onScroll = () => {
    setLimit(limit + 4);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return limit;
};

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
    <>
      <MovieList>
        <ul className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              rating={movie.rating}
            />
          ))}
        </ul>
      </MovieList>
    </>
  );
}

export default Movies;

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
