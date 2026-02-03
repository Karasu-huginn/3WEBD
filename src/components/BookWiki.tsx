import { useBookWiki } from "../hooks/useBookWiki";

interface BookWikiProps {
    authorKey: string;
    bookTitle: string;
}

export const BookWiki = (props: BookWikiProps) => {
    const { data, isLoading, error } = useBookWiki(props.bookTitle, props.authorKey);

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
    if (data) {
        console.log(data?.pages[0].key)
    }
    return <iframe src={`https://en.wikipedia.org/wiki/${data?.pages[0].key}`}></iframe>
}