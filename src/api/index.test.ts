import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { getSearchBooks, getBookDetails } from "./index";

describe("API Functions", () => {
  beforeEach(() => {
    // Réinitialise les mocks avant chaque test
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("getSearchBooks", () => {
    it("encode correctement les caractères spéciaux dans la recherche", async () => {
      const mockResponse = { docs: [], numFound: 0 };
      const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response);

      await getSearchBooks("Harry Potter & l'école");

      // Vérifie que l'URL est correctement encodée
      // Note: encodeURIComponent garde l'apostrophe ' non-encodée
      expect(fetchSpy).toHaveBeenCalledWith(
        expect.stringContaining("Harry%20Potter%20%26%20l'%C3%A9cole"),
      );
    });

    it("retourne les résultats de recherche", async () => {
      const mockData = {
        docs: [{ title: "Test Book", key: "/works/OL123W" }],
        numFound: 1,
      };

      vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      } as Response);

      const result = await getSearchBooks("test");
      expect(result).toEqual(mockData);
    });
  });

  describe("getBookDetails", () => {
    it("construit l'URL correctement avec le workId", async () => {
      const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response);

      await getBookDetails("OL123W");

      expect(fetchSpy).toHaveBeenCalledWith(
        "https://openlibrary.org/works/OL123W.json",
      );
    });
  });
});
