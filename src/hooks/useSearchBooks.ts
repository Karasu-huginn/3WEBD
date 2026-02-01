import { useQuery } from "@tanstack/react-query";
import { getSearchBooks } from "../api";
import type { SearchBooks } from "../types";

export function useSearchBooks(query: string) {
  return useQuery<SearchBooks>({
    queryKey: ["searchBooks", query],
    queryFn: () => getSearchBooks(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!query,
  });
}
