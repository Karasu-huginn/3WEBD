import type { RecentChange } from "../types";

export async function getRecentChanges(
  limit: number = 10,
): Promise<RecentChange[]> {
  const response = await fetch(
    `https://openlibrary.org/recentchanges.json?limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }
  return response.json();
}

export async function getBookTitle(bookKey: string) {
  const response = await fetch(`https://openlibrary.org${bookKey}.json`);

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }
  return response.json();
}
