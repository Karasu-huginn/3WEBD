import { useQuery } from "@tanstack/react-query";
import { getRecentChanges } from "../api";

export function useRecentChanges(limit: number = 10) {
  return useQuery({
    queryKey: ["recentChanges", limit],
    queryFn: () => getRecentChanges(limit),
    refetchInterval: 1000 * 60 * 2, // 2 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
