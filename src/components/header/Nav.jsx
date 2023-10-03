import { NavLink } from "react-router-dom";
import BookmarkBtn from "../BookmarkBtn";
import ThemeBtn from "./ThemeBtn";

const Nav = () => {
  return (
    <nav className="bg-slate-200 dark:bg-slate-700 dark:text-white py-3 px-4 flex items-center justify-between sticky top-0 z-20">
      <NavLink to="/">
        <h1 className="text-2xl">Movies hub</h1>
      </NavLink>
      <NavLink to="/watchlist" className="ml-auto mr-5">
        <BookmarkBtn />
      </NavLink>
      {/* <ThemeBtn /> */}
    </nav>
  );
};

export default Nav;
