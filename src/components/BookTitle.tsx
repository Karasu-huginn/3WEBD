import { useQuery } from "@tanstack/react-query";

const BookTitle = ({ bookKey }: { bookKey: string }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["book", bookKey],
    queryFn: async () => {
      const res = await fetch(`https://openlibrary.org${bookKey}.json`);
      return res.json();
    },
  });
  if (isPending) return <span className="text-gray-400">Chargement...</span>;
  if (error) return <span className="text-red-500">Erreur de chargement</span>;
  if (!data) return <span className="text-gray-400">Aucune donnée</span>;
  return <div>{data.title}</div>;
};

export default BookTitle;
