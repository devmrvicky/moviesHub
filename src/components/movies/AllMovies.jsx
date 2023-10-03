import { useSelector } from "react-redux";
import Movies from "./Movies";

const AllMovies = () => {
  const moviesList = useSelector((movies) => movies.allMovies);
  return (
    <>
      <Movies moviesList={moviesList} />
    </>
  );
};

export default AllMovies;
