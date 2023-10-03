import BookmarkBtn from "../BookmarkBtn";
import {
  addToWatchList,
  removeFromWatchList,
  handleWatchListMovie,
} from "../../features/moviesListSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const MovieCard = ({ movieDetails }) => {
  let { id, title, year, description, poster, collected } = movieDetails;
  const [isCollected, setIsCollected] = useState(collected);
  const dispatch = useDispatch();
  // const addToWatchList
  const handleAddToWatchList = () => {
    setIsCollected((prev) => !prev);
    // console.log(isCollected);
    // dispatch(handleWatchListMovie({ id, isCollected }));
    if (isCollected) {
      dispatch(removeFromWatchList(id));
    } else {
      // dispatch(addToWatchList(movieDetails));
      dispatch(addToWatchList(id));
    }
  };
  return (
    <div className="movie-card-wrapper w-52 flex-1">
      <div className="card">
        <div className="poster w-full h-[304px] border overflow-hidden">
          <img src={poster} alt={title} className="w-full object-cover" />
        </div>
        <div className="movie-detail relative p-2">
          <h1 className="text-xl font-semibold">
            {title.slice(0, 13)}
            {title.length >= 13 && "..."}
          </h1>
          <div className="release-year text-orange-800">{year}</div>
          <div className="short-description">{description.slice(0, 50)}...</div>
          <BookmarkBtn
            className="absolute top-2 right-0"
            handleAddToWatchList={handleAddToWatchList}
            isCollected={isCollected}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
