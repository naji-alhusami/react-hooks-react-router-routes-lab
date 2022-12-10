import React from "react";
import { directors } from "../data";

const showDirectorsData = (director) => {
  return (
    <div key={director.name}>
      <h4>{director.name}</h4>
      <ul>
        {director.movies.map((movie) => {
          return <li  key={movie}>{movie}</li>;
        })}
      </ul>
    </div>
  );
};

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) => showDirectorsData(director))}
    </div>
  );
}

export default Directors;
