import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Detail({ match, history }) {
  const id = match.params.id;
  console.log(match);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(null);
        setMovie(null);
        setLoading(true);

        const response = await axios.get(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        console.log('response', response);
        setMovie(response.data.data.movie);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchMovie();
  }, []);
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!movie) return null;

  console.log('movie', movie);

  return (
    <div className="movie__one">
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        title={movie.title}
      />
      <div className="movie__one__data">
        <h3 className="movie__one__title">{movie.title}</h3>
        <h5 className="movie__one__like">Like: {movie.like_count}</h5>
        <h5 className="movie__one__download">
          Download: {movie.download_count}
        </h5>
        <p className="movie__one__summary">{movie.description_full}</p>
        <button onClick={() => history.go(-1)}>Back</button>
      </div>
    </div>
  );
}

export default Detail;
