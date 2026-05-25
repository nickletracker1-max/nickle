import { describe, it, expect } from "vitest";
import {
  SITE_URL,
  SITE_NAME,
  SITE_EMAIL,
  SITE_LOGO,
  LOGO_PATH,
  FAVICON_ICO,
} from "../../lib/siteConfig";

describe("siteConfig", () => {
  it("SITE_URL is a valid https URL", () => {
    expect(SITE_URL).toMatch(/^https:\/\//);
  });

  it("SITE_NAME is non-empty", () => {
    expect(SITE_NAME.length).toBeGreaterThan(0);
  });

  it("SITE_EMAIL contains @", () => {
    expect(SITE_EMAIL).toContain("@");
  });

  it("SITE_LOGO is SITE_URL + LOGO_PATH", () => {
    expect(SITE_LOGO).toBe(`${SITE_URL}${LOGO_PATH}`);
  });

  it("FAVICON_ICO ends with .ico", () => {
    expect(FAVICON_ICO).toMatch(/\.ico$/);
  });
});
