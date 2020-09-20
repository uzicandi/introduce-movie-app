import React from 'react';
import './Movie.css';
import ReactStars from 'react-rating-stars-component';

function Movie({ id, year, title, summary, poster, rating }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__rating">Rating: {rating}</h5>
        <ReactStars
          classNames="movie__stars"
          edit={false}
          count={5}
          size={24}
          isHalf={true}
          value={rating / 2}
        />
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
        <a className="movie__detail" href={`/movies/${id}`}>
          자세히보기
        </a>
      </div>
    </div>
  );
}

export default Movie;
