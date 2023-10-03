import React from "react";
import { useSelector } from "react-redux";
import Movies from "./Movies";

const WatchList = () => {
  const allMovies = useSelector((movies) => movies.allMovies);
  const collectedMovies = allMovies.filter((movie) => movie.collected);
  return (
    <>
      <Movies moviesList={collectedMovies} />
    </>
  );
};

export default WatchList;
