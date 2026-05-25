import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TabsSection from "../../components/VideosPage/TabSection";

const mockPush = vi.fn();

vi.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/videos",
    query: {},
    push: mockPush,
  }),
}));

describe("TabsSection", () => {
  it("renders all tab labels", () => {
    render(<TabsSection />);
    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Podcast")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
  });

  it("defaults to 'All' tab active", () => {
    render(<TabsSection />);
    const allTab = screen.getByText("All");
    expect(allTab.className).toMatch(/bg-accent/);
  });

  it("calls router.push with correct tab query when a tab is clicked", () => {
    render(<TabsSection />);
    fireEvent.click(screen.getByText("Education"));
    expect(mockPush).toHaveBeenCalledWith(
      expect.objectContaining({ query: { tab: "education" } }),
      undefined,
      { shallow: true }
    );
  });
});
