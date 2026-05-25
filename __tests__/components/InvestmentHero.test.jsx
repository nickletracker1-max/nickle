import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InvestmentHero from "../../components/Investment/InvestmentHero";

describe("InvestmentHero", () => {
  it("renders the hero heading", () => {
    render(<InvestmentHero />);
    expect(screen.getByText(/Nickel Investment Strategies/i)).toBeInTheDocument();
  });

  it("renders the Nickel Investments badge", () => {
    render(<InvestmentHero />);
    expect(screen.getByText("Nickel Investments")).toBeInTheDocument();
  });

  it("renders the description mentioning stainless steel", () => {
    render(<InvestmentHero />);
    expect(screen.getByText(/stainless steel/i)).toBeInTheDocument();
  });
});
