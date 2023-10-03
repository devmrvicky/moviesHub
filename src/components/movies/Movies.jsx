import MovieCard from "./MovieCard";

const Movies = ({ moviesList }) => {
  return (
    <div className="flex items-center justify-center gap-3 p-4 flex-wrap ">
      {moviesList.map((movie) => (
        <div key={movie.id}>
          <MovieCard movieDetails={movie} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
