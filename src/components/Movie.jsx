import React from "react";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/w1280";

function Movie({ info }) {
  return (
    <div className="movie__box">
      <img src={IMAGE_BASE_URL + info.poster_path} alt="" />

      <div className="movie__info">
        <h3>{info.original_title}</h3>
        <span className="movie__info_rating">{info.vote_average}</span>
      </div>

      <div className="movie__overview">
        <h2>Overview</h2>
        <p>{info.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
