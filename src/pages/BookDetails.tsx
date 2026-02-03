import { useSearchParams } from "react-router";
import { useBookDetails } from "../hooks/useBookDetails";
import { BookWiki } from "../components/BookWiki";

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
    <div className="flex md:px-20 md:py-10 px-15 py-5">
      <div className="w-1/2 px-10 py-5 border border-gray-300 rounded-2xl mr-5">
        <h1 className="text-2xl font-bold">{data?.title}</h1>
        <p className="mb-1 overflow-hidden">{data?.description?.value}</p>
        <p>
          Created:{" "}
          {data?.created?.value
            ? new Date(data.created.value).toLocaleDateString()
            : ""}
        </p>
        <p className="mb-4">
          Last Modified:{" "}
          {data?.last_modified?.value
            ? new Date(data.last_modified.value).toLocaleDateString()
            : ""}
        </p>
        {/**GENRES LIVRES */}
        <div className="mb-4">
          <h2 className="text-xl font-medium text-gray-800 mb-2">Subjects</h2>
          <div className="flex flex-wrap gap-2">
            {data?.subjects && (
              <>
                {// Genres du livre (drama, romance, policier etc...)
                data?.subjects.map((subject) => (
                  <p
                    key={subject}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 rounded-3xl font-medium inline-block"
                  >
                    {subject}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>

        {/**PERSONNAGES */}
        <div className="mb-2">
          {data?.subject_people && (
            <>
              <h2 className="text-xl font-medium text-gray-800 mb-2">
                Personnages
              </h2>
              <div className="flex flex-wrap gap-2">
                {// Personnages du livre
                data?.subject_people.map((subject_person) => (
                  <p
                    className="bg-purple-100 hover:bg-purple-200 text-blue-800 px-4 rounded-3xl font-medium inline-block"
                    key={subject_person}
                  >
                    {subject_person}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>

        {/**LIEUX */}
        <div className="mb-4">
          {data?.subject_places && (
            <>
              <h2 className="text-xl font-medium text-gray-800 mb-2">Places</h2>
              <div className="flex flex-wrap gap-2">
                {// Ville et Pays
                data?.subject_places.map((subject_place) => (
                  <p
                    className="bg-purple-100 hover:bg-purple-200 text-purple-800 px-4 rounded-3xl font-medium inline-block"
                    key={subject_place}
                  >
                    {subject_place}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>

        {/**TIMES */}
        {data?.subject_times && (
          <>
            {// date (année uniquement)
            data?.subject_times.map((subject_time) => (
              <p key={subject_time}>{subject_time}</p>
            ))}
          </>
        )}

        {/**EXCERPTS */}
        {data?.excerpts && (
          <>
            {// extraits d'auteur (requête(s) supplémentaire(s) pour obtenir les noms d'auteurs par leur clé ?)
            data?.excerpts.map((excerpt) => (
              <div key={excerpt.excerpt}>
                <p>{excerpt.excerpt}</p>
                <p>{excerpt.author.key}</p>
                <p>{excerpt.comment}</p>
              </div>
            ))}
          </>
        )}
        {/**LINKS */}
        {data?.links && (
          <>
            {// external links to the book
            data?.links.map((link) => (
              <a key={link.url} href={link.url}>
                {link.title}
              </a>
            ))}
          </>
        )}
      </div>
      {/**<div className="w-2/5  px-15 py-5 border border-gray-300 rounded-2xl ml-5">
        <h2 className="text-xl font-bold">Wikipedia</h2>
        <p>Information on the book from Wikipedia</p>
      </div>*/}

      {data && (
        <BookWiki
          author_name={data?.authors[0].key || ""}
          book_title={data?.title || ""}
        />
      )}
      {/* AUTHOR NEEDS CHANGE (KEY -> NAME) */}
    </div>
  );
};

export default BookDetails;
