const API_URL = "https://openlibrary.org";
const WIKI_URL = "https://en.wikipedia.org/w/rest.php";

export async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }
  return response.json();
}

export async function fetchWiki<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${WIKI_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }
  return response.json();
}
