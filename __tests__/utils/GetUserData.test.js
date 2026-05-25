import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { GetUserData, SetUserData } from "../../src/utils/GetUserData";

describe("GetUserData", () => {
  beforeEach(() => {
    // Clear cookies before each test
    document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  });

  it("returns null when no userData cookie exists", () => {
    expect(GetUserData()).toBeNull();
  });

  it("returns parsed user data when cookie is set", () => {
    const mockUser = {
      id: 1,
      email: "test@example.com",
      name: "Test User",
      username: "testuser",
      access_token: "abc123",
    };
    SetUserData(mockUser);
    const result = GetUserData();
    expect(result).toEqual(mockUser);
  });

  it("returns null when cookie value is malformed JSON", () => {
    document.cookie = "userData=not-valid-json; path=/";
    expect(GetUserData()).toBeNull();
  });

  it("returns null when running server-side (no window)", () => {
    const originalWindow = global.window;
    // @ts-ignore
    delete global.window;
    expect(GetUserData()).toBeNull();
    global.window = originalWindow;
  });
});

describe("SetUserData", () => {
  it("writes user data to cookie and can be read back", () => {
    const mockUser = {
      id: 42,
      email: "user@nickel.com",
      name: "Nickel User",
      username: "nickeluser",
      access_token: "token_xyz",
    };
    SetUserData(mockUser);
    const result = GetUserData();
    expect(result?.email).toBe("user@nickel.com");
    expect(result?.access_token).toBe("token_xyz");
  });
});
