import { useQuery } from "@tanstack/react-query";
import { getBookWiki } from "../api";
import type { BookWikiInfosResponse } from "../types";

export function useBookWiki(bookTitle: string, authorName: string) {
  //const { data } = useAuthorDetails(authorKey);
  return useQuery<BookWikiInfosResponse>({
    queryKey: ["bookWiki", bookTitle],
    queryFn: async () => getBookWiki(`${bookTitle} ${authorName} book`),
    //queryFn: async () => getBookWiki(`${bookTitle} ${data?.name}`),
  });
}
