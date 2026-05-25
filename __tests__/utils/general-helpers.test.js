import { describe, it, expect } from "vitest";
import GeneralHelpers from "../../src/utils/general-helpers";

describe("GeneralHelpers.getTimeAgo", () => {
  it("returns a relative time string for a past date", () => {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const result = GeneralHelpers.getTimeAgo(oneHourAgo);
    expect(result).toMatch(/ago/);
  });

  it("returns 'less than a minute ago' for a very recent date", () => {
    const justNow = new Date(Date.now() - 5000).toISOString();
    const result = GeneralHelpers.getTimeAgo(justNow);
    expect(result).toMatch(/less than a minute ago/);
  });

  it("handles a Date object as input", () => {
    const date = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    const result = GeneralHelpers.getTimeAgo(date);
    expect(result).toMatch(/ago/);
  });
});
