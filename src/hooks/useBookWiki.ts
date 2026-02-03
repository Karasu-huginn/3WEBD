import { useQuery } from "@tanstack/react-query";
import { getBookWiki } from "../api";
import type { BookWikiInfosResponse } from "../types";
import { useAuthorDetails } from "./useAuthorDetails";


export function useBookWiki(bookTitle: string, authorKey: string) {
    //const { data } = useAuthorDetails(authorKey);
    return useQuery<BookWikiInfosResponse>({
        queryKey: ["bookWiki", bookTitle],
        queryFn: async () => getBookWiki(`${bookTitle}`),
        //queryFn: async () => getBookWiki(`${bookTitle} ${data?.name}`),
    });
}
