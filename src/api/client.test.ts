import { describe, it, expect, vi } from "vitest";
import { fetchAPI, fetchWiki } from "./client";

describe("fetchAPI", () => {
  it("lance une erreur si la requête échoue", async () => {
    // vi.spyOn = on "espionne" fetch pour simuler une réponse
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false, // Simule une erreur HTTP
      status: 404,
    } as Response);

    // Vérifie que l'erreur est bien lancée
    await expect(fetchAPI("/test")).rejects.toThrow("Erreur API: 404");

    // Nettoie le mock après le test
    vi.restoreAllMocks();
  });

  it("retourne les données JSON si la requête réussit", async () => {
    const mockData = { title: "Test Book" };

    // Simule une réponse réussie avec des données
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    } as Response);

    const result = await fetchAPI("/test");

    // Vérifie que les données sont bien retournées
    expect(result).toEqual(mockData);

    vi.restoreAllMocks();
  });
});

describe("fetchWiki", () => {
  it("lance une erreur si la requête échoue", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 500,
    } as Response);

    await expect(fetchWiki("/test")).rejects.toThrow("Erreur API: 500");

    vi.restoreAllMocks();
  });
});
