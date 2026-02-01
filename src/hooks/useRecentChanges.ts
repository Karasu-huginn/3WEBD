import { useQuery } from "@tanstack/react-query";
import { getRecentChanges } from "../api";

export function useRecentChanges(limit: number = 10) {
  return useQuery({
    queryKey: ["recentChanges", limit],
    queryFn: () => getRecentChanges(limit),
  });
}
