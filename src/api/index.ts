import type { Book, BookDetails, RecentChange, SearchBooks } from "../types";
import { fetchAPI } from "./client";

export function getRecentChanges(limit: number = 10): Promise<RecentChange[]> {
  return fetchAPI(`/recentchanges.json?limit=${limit}&bot=false`);
}

export function getBookTitle(bookKey: string): Promise<Book> {
  return fetchAPI(`${bookKey}.json`);
}

export function getSearchBooks(query: string): Promise<SearchBooks> {
  return fetchAPI(`/search.json?q=${encodeURIComponent(query)}&limit=24`);
}

export function getBookDetails(query: string): Promise<BookDetails> {
  return fetchAPI(`/works/${query}.json`);
}
