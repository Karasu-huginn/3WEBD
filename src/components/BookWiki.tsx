import { useBookWiki } from "../hooks/useBookWiki";

interface BookWikiProps {
    author_name: string;
    book_title: string;
}

export const BookWiki = (props: BookWikiProps) => {
    const { data, isLoading, error } = useBookWiki(`${props.author_name} ${props.book_title}`);

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

    return <iframe src={`https://en.wikipedia.org/wiki/${data?.key}`}></iframe>
}