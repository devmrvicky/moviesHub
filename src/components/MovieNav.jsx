import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MovieNav = () => {
  const moviesList = useSelector((movies) => movies.allMovies);
  const collectedMovies = moviesList.filter((movie) => movie.collected);

  return (
    <div className="flex items-center gap-5 px-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `all-movies flex items-center gap-1 text-sm text-zinc-800 relative px-2 py-2 after:content-[""] after:w-full after:h-0.5 after:bg-slate-600 after:absolute after:bottom-0 after:left-0 cursor-pointer`
            : `all-movies flex items-center gap-1 text-sm text-zinc-800 relative px-2 py-2 cursor-pointer`
        }
      >
        <p>All</p>
        <span>({moviesList.length})</span>
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) =>
          isActive
            ? `all-movies flex items-center gap-1 text-sm text-zinc-800 relative px-2 py-2 after:content-[""] after:w-full after:h-0.5 after:bg-slate-600 after:absolute after:bottom-0 after:left-0 cursor-pointer`
            : `all-movies flex items-center gap-1 text-sm text-zinc-800 relative px-2 py-2 cursor-pointer`
        }
      >
        <p>Collected</p>
        <span>({collectedMovies.length})</span>
      </NavLink>
    </div>
  );
};

export default MovieNav;
