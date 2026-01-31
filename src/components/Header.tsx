import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      {/*LOGO*/}
      <div>
        Town <span>Library</span>
      </div>

      {/*SEARCH*/}
      <div></div>

      {/**Home */}
      <Link to="/">Home</Link>
      {/*ADVANCED SEARCH LINK */}
      <Link to="/advanced-search" className="hover:text-blue-200">
        Advanced Search
      </Link>
    </div>
  );
};

export default Header;
