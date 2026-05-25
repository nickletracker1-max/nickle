import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../../lib/database", () => ({
  query: vi.fn(),
}));

import { query } from "../../lib/database";
import handler from "../../pages/api/press-releases";

const mockRes = {
  status: vi.fn().mockReturnThis(),
  json: vi.fn().mockReturnThis(),
};

describe("GET /api/press-releases", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 405 for non-GET requests", async () => {
    await handler({ method: "PUT" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(405);
  });

  it("returns mapped press releases on success", async () => {
    query.mockResolvedValueOnce({
      rows: [
        {
          id: 1,
          ticker: "NIC",
          company_name: "Nickel Industries",
          title: "Nickel Industries Q1 Results",
          date: "2026-04-15",
          url: "https://example.com/pr/1",
          content: "Full content",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
    });

    await handler({ method: "GET" }, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ ticker: "NIC", company_name: "Nickel Industries" }),
      ])
    );
  });

  it("returns 500 on database error", async () => {
    query.mockRejectedValueOnce(new Error("DB timeout"));
    await handler({ method: "GET" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
  });
});
