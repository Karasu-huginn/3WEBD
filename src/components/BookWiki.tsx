import { useBookWiki } from "../hooks/useBookWiki";

interface BookWikiProps {
  authorKey: string;
  bookTitle: string;
}

export const BookWiki = (props: BookWikiProps) => {
  const { data, isLoading, error } = useBookWiki(
    props.bookTitle,
    props.authorKey,
  );

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
    <iframe
      className="w-full md:w-1/2 h-screen border border-gray-300 rounded-2xl md:ml-5"
      src={`https://en.wikipedia.org/wiki/${encodeURIComponent(data?.pages[0]?.key || "")}`}
    ></iframe>
  );
};
