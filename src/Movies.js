import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const MovieList = styled.div`
  .movies {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px;
    padding-top: 70px;
  }
`;

function Movies() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(20);

  const fetchMovies = () => {
    axios
      .get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}`)
      .then(response => {
        setError(null);
        setLoading(true);
        console.log(response);
        setMovies(response.data.data.movies);
      })
      .catch(e => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, [limit]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!movies) return null;

  console.log('movies', movies);

  return (
    <>
      <MovieList>
        <InfiniteScroll
          dataLength={4}
          hasMore={true}
          next={() => setLimit(limit + 4)}
        >
          <ul className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                rating={movie.rating}
              />
            ))}
          </ul>
        </InfiniteScroll>
      </MovieList>
    </>
  );
}

export default Movies;
