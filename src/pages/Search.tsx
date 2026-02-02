import { useSearchParams } from "react-router";
import Books from "../components/Books";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return <Books query={query} page="search" />;
};

export default Search;
