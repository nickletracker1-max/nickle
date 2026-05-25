import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DataBreadcrumb from "../../components/Data/DataBreadcrumb";

const mockBack = vi.fn();

vi.mock("next/router", () => ({
  useRouter: () => ({ back: mockBack }),
}));

describe("DataBreadcrumb", () => {
  it("renders the Data back button", () => {
    render(<DataBreadcrumb link="/data" title="LME Stocks" />);
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("renders the section title as a link", () => {
    render(<DataBreadcrumb link="/data#lme" title="LME Stocks" />);
    const link = screen.getByText("LME Stocks");
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/data#lme");
  });

  it("calls router.back() when Data button is clicked", () => {
    render(<DataBreadcrumb link="/data" title="Supply" />);
    fireEvent.click(screen.getByText("Data"));
    expect(mockBack).toHaveBeenCalledOnce();
  });
});
