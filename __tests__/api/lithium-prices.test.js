import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock axios before importing the handler
vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
  },
}));

import axios from "axios";
import handler from "../../pages/api/lithium-prices";

const mockReq = { method: "GET" };
const mockRes = {
  status: vi.fn().mockReturnThis(),
  json: vi.fn().mockReturnThis(),
  send: vi.fn().mockReturnThis(),
};

describe("GET /api/lithium-prices", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns 405 for non-GET requests", async () => {
    await handler({ method: "POST" }, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(405);
  });

  it("returns mapped metal prices on success", async () => {
    axios.get.mockResolvedValueOnce({
      data: [
        { name: "Nickel", price: 8.51, day_change: -0.16, percent_change: -2.27 },
        { name: "Aluminum", price: 0.91, day_change: -0.02, percent_change: -1.51 },
      ],
    });

    await handler(mockReq, mockRes);

    expect(mockRes.send).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ metal_name: "Nickel", price: 8.51 }),
        expect.objectContaining({ metal_name: "Aluminum", price: 0.91 }),
      ])
    );
  });

  it("returns fallback data when the scraper is unreachable", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network error"));

    await handler(mockReq, mockRes);

    // Fallback sends with status 400
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.send).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ metal_name: "Nickel" }),
      ])
    );
  });
});
