import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the database module
vi.mock("../../lib/database", () => ({
  query: vi.fn(),
}));

import { query } from "../../lib/database";
import handler from "../../pages/api/general-news";

const mockRes = {
  status: vi.fn().mockReturnThis(),
  json: vi.fn().mockReturnThis(),
};

describe("GET /api/general-news", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 405 for non-GET requests", async () => {
    await handler({ method: "POST" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(405);
  });

  it("returns an empty array when no rows found", async () => {
    query.mockResolvedValueOnce({ rows: [] });
    await handler({ method: "GET" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith([]);
  });

  it("returns mapped news items on success", async () => {
    const fakeRow = {
      id: 1,
      source: "Reuters",
      title: "Nickel prices rise",
      url: "https://example.com/news/1",
      content: "Full content here",
      summary: "Short summary",
      image_url: "https://example.com/img.jpg",
      date: "2026-05-01",
      created_at: new Date("2026-05-01"),
      updated_at: new Date("2026-05-01"),
    };
    query.mockResolvedValueOnce({ rows: [fakeRow] });

    await handler({ method: "GET" }, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          source: "Reuters",
          title: "Nickel prices rise",
        }),
      ])
    );
  });

  it("returns 500 on database error", async () => {
    query.mockRejectedValueOnce(new Error("DB connection failed"));
    await handler({ method: "GET" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
  });
});
