import { test, expect } from "vitest";

import { pokemonEvolveNewStats } from "./main.js";

test("Should add 20% to current PokemonXP", () => {
  const initialXP = 100;
  const expectedXP = initialXP * 1.2;
  const result = pokemonEvolveNewStats(initialXP);
  expect(result).toBe(expectedXP);
  expect(typeof result).toBe("number");
});


test("Should handle large XP numbers", () => {
  const initialXP = 1000000;
  const expectedXP = Math.round(initialXP * 1.2);
  expect(pokemonEvolveNewStats(initialXP)).toBe(expectedXP);
});