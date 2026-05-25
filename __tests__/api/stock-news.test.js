import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../../lib/database", () => ({
  query: vi.fn(),
}));

import { query } from "../../lib/database";
import handler from "../../pages/api/stock-news";

const mockRes = {
  status: vi.fn().mockReturnThis(),
  json: vi.fn().mockReturnThis(),
};

const fakeRow = {
  id: 1,
  ticker: "VALE",
  company_name: "Vale S.A.",
  exchange: "NYSE",
  yahoo_ticker: "VALE",
  title: "Vale reports record nickel output",
  summary: "Short summary here",
  date: "2026-05-01",
  image_url: "https://example.com/img.jpg",
  url: "https://example.com/news/1",
  provider: "Reuters",
  created_at: new Date("2026-05-01"),
  updated_at: new Date("2026-05-01"),
};

describe("GET /api/stock-news", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 405 for non-GET requests", async () => {
    await handler({ method: "POST" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(405);
  });

  it("returns mapped stock news on success", async () => {
    query.mockResolvedValueOnce({ rows: [fakeRow] });
    await handler({ method: "GET" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ ticker: "VALE", title: "Vale reports record nickel output" }),
      ])
    );
  });

  it("returns empty array when no rows found", async () => {
    query.mockResolvedValueOnce({ rows: [] });
    await handler({ method: "GET" }, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith([]);
  });

  it("returns 500 on database error", async () => {
    query.mockRejectedValueOnce(new Error("Connection refused"));
    await handler({ method: "GET" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
  });
});
