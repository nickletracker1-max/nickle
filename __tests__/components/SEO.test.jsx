import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import SEO from "../../components/SEO";

// next/head renders into document.head in jsdom
vi.mock("next/router", () => ({
  useRouter: () => ({ asPath: "/test-path" }),
}));

describe("SEO component", () => {
  it("renders without crashing", () => {
    expect(() =>
      render(
        <SEO
          title="Test Title"
          description="Test description"
          keywords="test, keywords"
        />
      )
    ).not.toThrow();
  });

  it("accepts a custom canonicalUrl prop", () => {
    expect(() =>
      render(
        <SEO
          title="Test"
          description="Desc"
          keywords="k"
          canonicalUrl="https://www.nickelmetaltracker.com/custom"
        />
      )
    ).not.toThrow();
  });
});
