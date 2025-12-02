export function sum(...numbers: Array<number>) {
  let result = 0;

  for (const current of numbers) {
    if (isNaN(current)) {
      throw new Error("Errou!");
    }

    result += current;
  }

  return result;
}
