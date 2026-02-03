import { useSearchParams } from "react-router";
import { useBookDetails } from "../hooks/useBookDetails";

const BookDetails = () => {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key") || "";
  const { data, isLoading, error } = useBookDetails(key);

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
    <div>
      <p>{data?.title}</p>
      <p>{data?.description.value}</p>
      {// Genres du livre (drama, romance, policier etc...)
      data?.subjects?.map((subject) => (
        <p key={subject}>{subject}</p>
      ))}
      {// Personnages du livre
      data?.subject_people?.map((subject_person) => (
        <p key={subject_person}>{subject_person}</p>
      ))}
      {// Ville et Pays
      data?.subject_places?.map((subject_place) => (
        <p key={subject_place}>{subject_place}</p>
      ))}
      {// date (année uniquement)
      data?.subject_times?.map((subject_time) => (
        <p key={subject_time}>{subject_time}</p>
      ))}

      {// extraits d'auteur (requête(s) supplémentaire(s) pour obtenir les noms d'auteurs par leur clé ?)
      data?.excerpts?.map((excerpt) => (
        <div key={excerpt.excerpt}>
          <p>{excerpt.excerpt}</p>
          <p>{excerpt.author.key}</p>
          <p>{excerpt.comment}</p>
        </div>
      ))}
      <p>{data?.created.value}</p>
      <p>{data?.last_modified.value}</p>
      {// external links to the book
      data?.links?.map((link) => (
        <a key={link.url} href={link.url}>
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default BookDetails;
