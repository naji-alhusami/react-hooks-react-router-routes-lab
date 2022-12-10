import React from "react";
import { movies } from "../data";

const showMoviesData = (movie) => {
  return (
    <div key={movie.title}>
      <h4>{movie.title}</h4>
      <p>{movie.time} min</p>
      <ul>
        {movie.genres.map((genre) => {
          return <li key={genre}>{genre}</li>;
        })}
      </ul>
    </div>
  );
};

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>{movies.map((movie) => showMoviesData(movie))}</div>
    </div>
  );
}

export default Movies;
