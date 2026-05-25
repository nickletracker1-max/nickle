import { describe, it, expect } from "vitest";
import {
  LITHIUM_PRICES,
  PRESS_RELEASE,
  STOCK_NEWS,
  MOST_FOLLOWED,
  STOCK_SCREENER,
  INSIDER_TRANSACTIONS,
  VIDEOS,
  SUBSTACKS,
} from "../../src/api/lithiumAPI";

describe("lithiumAPI constants", () => {
  it("local API routes start with /api/", () => {
    const localRoutes = [
      LITHIUM_PRICES,
      PRESS_RELEASE,
      STOCK_NEWS,
      MOST_FOLLOWED,
      STOCK_SCREENER,
      INSIDER_TRANSACTIONS,
      VIDEOS,
      SUBSTACKS,
    ];
    localRoutes.forEach((route) => {
      expect(route).toMatch(/^\/api\//);
    });
  });

  it("all constants are non-empty strings", () => {
    const allConstants = [
      LITHIUM_PRICES,
      PRESS_RELEASE,
      STOCK_NEWS,
      MOST_FOLLOWED,
      STOCK_SCREENER,
      INSIDER_TRANSACTIONS,
      VIDEOS,
      SUBSTACKS,
    ];
    allConstants.forEach((c) => {
      expect(typeof c).toBe("string");
      expect(c.length).toBeGreaterThan(0);
    });
  });
});
