import { describe, it, expect } from "vitest";
import { filterFields } from "./filterFields";

describe("filterFields", () => {
  it("contient 7 champs de filtre", () => {
    // Vérifie que le tableau a bien 7 éléments
    expect(filterFields).toHaveLength(7);
  });

  it("chaque champ a name, label et placeholder", () => {
    filterFields.forEach((field) => {
      expect(field).toHaveProperty("name");
      expect(field).toHaveProperty("label");
      expect(field).toHaveProperty("placeholder");
    });
  });

  it("contient les champs essentiels title, author, isbn", () => {
    const fieldNames = filterFields.map((f) => f.name);

    expect(fieldNames).toContain("title");
    expect(fieldNames).toContain("author");
    expect(fieldNames).toContain("isbn");
  });
});
