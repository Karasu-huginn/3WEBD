import { Link } from "react-router";
import { useSearchBooks } from "../hooks/useSearchBooks";

interface BooksProps {
  query: string;
  page: string;
}
const Books = (props: BooksProps) => {
  const { data, isLoading, error } = useSearchBooks(props.query);

  if (!props.query) {
    return (
      <div className="p-8">
        <p className="text-center text-gray-500">
          Please use the search bar to find books
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-8">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-center text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="px-8">
      {props.page !== "advanced" && (
        <h1 className="text-3xl font-bold mb-6">Results for "{props.query}"</h1>
      )}

      <p className="text-gray-600 mb-4">{data?.numFound} books found</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.docs.map((book) => (
          <div
            key={book.key}
            className="border border-gray-400 rounded-lg p-4 hover:shadow-gray-200 hover:shadow-lg"
          >
            <Link to={`/book/?key=${book.key.substring(7)}`}>

              <div className="flex gap-4">
                {book.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="w-24 h-32 object-cover rounded"
                  />
                ) : (
                  <div className="w-24 h-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                    No cover
                  </div>
                )}

                <div className="flex-1">
                  <h2 className="font-semibold text-lg mb-2">{book.title}</h2>

                  {book.author_name && (
                    <p className="text-sm text-gray-700 mb-1">
                      By: {book.author_name[0]}
                    </p>
                  )}

                  {book.first_publish_year && (
                    <p className="text-xs text-gray-500">
                      Published: {book.first_publish_year}
                    </p>
                  )}

                  <p className="text-xs text-gray-500 mt-2">
                    {book.edition_count} editions
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
