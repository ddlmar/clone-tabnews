import { sum } from "@/src/models/calc";
import { expect, test } from "@jest/globals";

test("somando multiplos valores", () => {
  expect(sum(-1, 2, 3)).toBe(4);
});
