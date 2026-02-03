import { useQuery } from "@tanstack/react-query";
import { getAuthorDetails } from "../api";

export function useAuthorDetails(authorKey: string) {
    return useQuery({
        queryKey: ["authorDetails", authorKey],
        queryFn: async () => getAuthorDetails(authorKey),
    });
}
