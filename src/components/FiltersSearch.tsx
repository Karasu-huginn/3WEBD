import { useState } from "react";
import { useNavigate } from "react-router";

const FiltersSearch = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    title: "",
    author: "",
    subject: "",
    publisher: "",
    year: "",
    isbn: "",
    language: "",
  });

  const filterFields = [
    { name: "title", label: "Title", placeholder: "e.g., Naruto" },
    {
      name: "author",
      label: "Author",
      placeholder: "e.g., Stendhal",
    },
    {
      name: "subject",
      label: "Subject",
      placeholder: "e.g., Anime",
    },
    {
      name: "publisher",
      label: "Publisher",
      placeholder: "e.g., Penguin Books",
    },
    { name: "year", label: "Publication Year", placeholder: "e.g., 2021" },
    { name: "isbn", label: "ISBN", placeholder: "e.g., 9780743273565" },
    { name: "language", label: "Language", placeholder: "e.g., eng, fra" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const queryParts: string[] = [];
    if (filters.title) queryParts.push(`title:${filters.title}`);
    if (filters.author) queryParts.push(`author:${filters.author}`);
    if (filters.subject) queryParts.push(`subject:${filters.subject}`);
    if (filters.publisher) queryParts.push(`publisher:${filters.publisher}`);
    if (filters.year) queryParts.push(`first_publish_year:${filters.year}`);
    if (filters.isbn) queryParts.push(`isbn:${filters.isbn}`);
    if (filters.language) queryParts.push(`language:${filters.language}`);

    const query = queryParts.join(" AND ");
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleReset = () => {
    setFilters({
      title: "",
      author: "",
      subject: "",
      publisher: "",
      year: "",
      isbn: "",
      language: "",
    });
  };

  return (
    <div className="w-full max-w-80 border rounded-2xl border-gray-400 p-8">
      <form onSubmit={handleSearch}>
        <div className="flex flex-col gap-5">
          <div className="mb-2">
            <h2 className="text-xl font-semibold mb-2">Search Filters</h2>
            <p className="text-sm text-gray-500">Fill in one or more fields</p>
          </div>

          {filterFields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label htmlFor={field.name} className=" text-sm font-semibold">
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={filters[field.name as keyof typeof filters]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
                className="p-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="flex gap-4 mt-2">
            <button
              type="submit"
              className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FiltersSearch;
