import { describe, it, expect } from "vitest";
import { timeAgo } from "./timeAgo";

// describe = groupe de tests pour une fonctionnalité
describe("timeAgo", () => {
  // it = un test individuel
  it("retourne '1 minute' pour il y a 1 minute", () => {
    // Crée une date d'il y a 1 minute (60000 ms = 1 min)
    const oneMinuteAgo = new Date(Date.now() - 60000).toISOString();

    // expect = vérifie que le résultat est correct
    expect(timeAgo(oneMinuteAgo)).toBe("1 minute");
  });

  it("retourne '5 minutes' pour il y a 5 minutes", () => {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60000).toISOString();
    expect(timeAgo(fiveMinutesAgo)).toBe("5 minutes");
  });

  it("retourne '1 hour' pour il y a 60 minutes", () => {
    const oneHourAgo = new Date(Date.now() - 60 * 60000).toISOString();
    expect(timeAgo(oneHourAgo)).toBe("1 hour");
  });

  it("retourne '2 hours' pour il y a 2 heures", () => {
    const twoHoursAgo = new Date(Date.now() - 120 * 60000).toISOString();
    expect(timeAgo(twoHoursAgo)).toBe("2 hours");
  });
});
