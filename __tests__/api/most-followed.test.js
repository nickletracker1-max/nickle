import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../../lib/database", () => ({
  query: vi.fn(),
}));

import { query } from "../../lib/database";
import handler from "../../pages/api/most-followed";

const mockRes = {
  status: vi.fn().mockReturnThis(),
  json: vi.fn().mockReturnThis(),
};

const makeRow = (overrides = {}) => ({
  id: 1,
  name: "Vale S.A.",
  ticker: "VALE",
  open_price: "10.50",
  close_price: "10.80",
  intraday_percentage: "2.86",
  current_price: "10.80",
  intraday_change: "0.30",
  seven_day_change: "0.50",
  seven_day_percentage: "4.85",
  volume: "15000000",
  country: "Brazil",
  stock_exchange: "NYSE",
  stock_type: "most_watched",
  ...overrides,
});

describe("GET /api/most-followed", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 405 for non-GET requests", async () => {
    await handler({ method: "DELETE" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(405);
  });

  it("groups stocks by stock_type", async () => {
    query.mockResolvedValueOnce({
      rows: [
        makeRow({ stock_type: "most_watched" }),
        makeRow({ id: 2, ticker: "BHP", stock_type: "north_american_leaders" }),
        makeRow({ id: 3, ticker: "RIO", stock_type: "global_market_leaders" }),
      ],
    });

    await handler({ method: "GET" }, mockRes);

    const response = mockRes.json.mock.calls[0][0];
    expect(response.success).toBe(true);
    expect(response.data.most_watched).toHaveLength(1);
    expect(response.data.north_american_leaders).toHaveLength(1);
    expect(response.data.global_market_leaders).toHaveLength(1);
  });

  it("returns fallback empty groups on database error", async () => {
    query.mockRejectedValueOnce(new Error("DB error"));
    await handler({ method: "GET" }, mockRes);

    const response = mockRes.json.mock.calls[0][0];
    expect(response.success).toBe(false);
    expect(response.data.most_watched).toEqual([]);
    expect(response.data.north_american_leaders).toEqual([]);
    expect(response.data.global_market_leaders).toEqual([]);
  });

  it("parses numeric fields correctly", async () => {
    query.mockResolvedValueOnce({ rows: [makeRow()] });
    await handler({ method: "GET" }, mockRes);

    const response = mockRes.json.mock.calls[0][0];
    const stock = response.data.most_watched[0];
    expect(typeof stock.current_price).toBe("number");
    expect(typeof stock.volume).toBe("number");
    expect(stock.current_price).toBe(10.8);
  });
});
