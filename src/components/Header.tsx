import { useState, type SubmitEventHandler } from "react";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200 gap-8">
      {/*LOGO*/}
      <Link to="/" className="text-2xl">
        Town <span className="text-blue-500">Library</span>
      </Link>

      {/*SEARCH*/}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex flex-1 gap-2 max-w-md"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books"
          className="px-4 py-1 flex-1 border border-gray-300 rounded-lg"
        ></input>
        <button
          type="submit"
          className="px-5 py-1 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
        >
          Search
        </button>
      </form>

      {/**LINKS */}
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/advanced-search" className="hover:text-blue-500">
          Advanced Search
        </Link>
      </nav>
    </header>
  );
};

export default Header;
