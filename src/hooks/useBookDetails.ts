import { useQuery } from "@tanstack/react-query";
import { getBookDetails } from "../api";
import type { BookDetails } from "../types";

export function useBookDetails(query: string) {
    return useQuery<BookDetails>({
        queryKey: ["getBookDetails", query],
        queryFn: () => getBookDetails(query),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
