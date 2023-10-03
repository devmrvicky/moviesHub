import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const BookmarkBtn = ({ className = "", handleAddToWatchList, isCollected }) => {
  return (
    <button
      className={`add-watch-list-btn w-8 h-8 flex items-center justify-center rounded hover:bg-zinc-300 ${className}`}
      onClick={handleAddToWatchList}
    >
      {isCollected ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
};

export default BookmarkBtn;
