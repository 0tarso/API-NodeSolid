import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test('Increase year of date with plus 1', () => {
  const year = new Date().getFullYear()

  expect(
    getFutureDate(`${year}-08-10`).getFullYear())
    .toEqual(year + 1)
})