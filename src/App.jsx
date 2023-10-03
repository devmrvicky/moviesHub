import MovieNav from "./components/MovieNav";
import Nav from "./components/header/Nav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-7xl w-full mx-auto">
        <MovieNav />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
