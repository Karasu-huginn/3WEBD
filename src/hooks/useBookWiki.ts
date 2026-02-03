import { useQuery } from "@tanstack/react-query";
import { getBookWiki } from "../api";
import type { BookWikiInfos } from "../types";


export function useBookWiki(bookQuery: string) {
    return useQuery<BookWikiInfos>({
        queryKey: ["bookWiki", bookQuery],
        queryFn: async () => getBookWiki(bookQuery),
    });
}
