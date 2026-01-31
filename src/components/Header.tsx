import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 gap-8">
      {/*LOGO*/}
      <div className="text-2xl">
        Town <span className="text-blue-500">Library</span>
      </div>

      {/*SEARCH*/}
      <div className="hidden md:flex flex-1 gap-2 max-w-md">
        <input
          type="text"
          placeholder="Search books"
          className="px-4 py-1 flex-1 border border-gray-300 rounded-lg"
        ></input>
        <button className="px-5 py-1 bg-gray-800 hover:bg-gray-700 text-white rounded-lg">
          Search
        </button>
      </div>

      {/**LINKS */}
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/advanced-search" className="hover:text-blue-200">
          Advanced Search
        </Link>
      </nav>
    </header>
  );
};

export default Header;
