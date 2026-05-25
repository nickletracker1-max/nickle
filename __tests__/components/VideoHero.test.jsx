import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import VideoHero from "../../components/VideosPage/VideoHero";

describe("VideoHero", () => {
  it("renders the hero heading", () => {
    render(<VideoHero />);
    expect(screen.getByText(/Nickel Market Updates/i)).toBeInTheDocument();
  });

  it("renders the Nickel Videos badge", () => {
    render(<VideoHero />);
    expect(screen.getByText("Nickel Videos")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<VideoHero />);
    expect(screen.getByText(/educational video content/i)).toBeInTheDocument();
  });
});
