import { useQuery } from "@tanstack/react-query";
import { getBookTitle } from "../api";

export function useBook(bookKey: string) {
  return useQuery({
    queryKey: ["book", bookKey],
    queryFn: async () => getBookTitle(bookKey),
  });
}
