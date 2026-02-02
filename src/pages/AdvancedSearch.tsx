import { useSearchParams } from "react-router";
import Books from "../components/Books";
import FiltersSearch from "../components/FiltersSearch";

const AdvancedSearch = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="md:px-20 md:py-10 px-10 py-5 flex flex-col gap-5">
      <div className="w-full flex flex-col justify-center">
        <h1 className="font-bold text-2xl">Advanced Search</h1>
        <p className="text-gray-600">Search something really specific</p>
      </div>
      <div className="w-full flex flex-row">
        {/**Filters */}
        <FiltersSearch />
        <Books query={query} page="advanced" />
      </div>
    </div>
  );
};

export default AdvancedSearch;
