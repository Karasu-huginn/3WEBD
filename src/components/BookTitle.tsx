import { useBook } from "../hooks/useBook";

const BookTitle = ({ bookKey }: { bookKey: string }) => {
  const { isPending, error, data } = useBook(bookKey);

  if (isPending) return <span className="text-gray-400">Chargement...</span>;
  if (error) return <span className="text-red-500">Erreur de chargement</span>;
  if (!data) return <span className="text-gray-400">Aucune donnée</span>;
  return <div>{data.title}</div>;
};

export default BookTitle;
