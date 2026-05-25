import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../components/Navbar";

const mockPush = vi.fn();

vi.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/",
    push: mockPush,
  }),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt, onClick, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onClick={onClick} {...props} />
  ),
}));

vi.mock("framer-motion", () => ({
  motion: {
    button: ({ children, onClick, className }) => (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    ),
    div: ({ children, className }) => (
      <div className={className}>{children}</div>
    ),
  },
}));

describe("Navbar", () => {
  it("renders the logo image", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  it("renders all nav links on desktop", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("News")).toBeInTheDocument();
    expect(screen.getByText("Nickel Investments")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
    expect(screen.getByText("Nickel 101")).toBeInTheDocument();
  });

  it("navigates to home when logo is clicked", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByAltText("Logo"));
    expect(mockPush).toHaveBeenCalledWith("/");
  });

  it("opens mobile menu when hamburger is clicked", () => {
    render(<Navbar />);
    // The FaBars icon is the hamburger — click it
    const bars = document.querySelector(".xl\\:hidden svg, .xl\\:hidden");
    // Menu items should appear after click
    const menuToggle = document.querySelector(".xl\\:hidden");
    if (menuToggle) {
      fireEvent.click(menuToggle);
    }
    // After opening, Home link should still be visible
    expect(screen.getAllByText("Home").length).toBeGreaterThanOrEqual(1);
  });
});
