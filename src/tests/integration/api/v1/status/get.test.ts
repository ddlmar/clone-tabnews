import { expect, test } from "@jest/globals";

test("GET, /api/v1/status response", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);
});
