import React, { useState, useEffect, useRef } from 'react';
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
  // const paginate = () => {
  //   setLimit(limit + 4);
  // };
  const loader = useRef(null);

  const fetchMovies = async () => {
    try {
      setError(null);
      setMovies(null);
      setLoading(true);
      const response = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?limit=${limit}`
      );
      console.log(response);

      setMovies(response.data.data.movies);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
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
            <div className="loading" ref={loader}>
              <h2>Load More</h2>
            </div>
          </ul>
        </InfiniteScroll>
      </MovieList>
    </>
  );
}

export default Movies;
