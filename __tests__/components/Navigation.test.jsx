import Navigation from "@/app/components/Navigation";
import { render, screen } from "@testing-library/react";

describe("Navigation content", () => {
  test("display a title navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Lemurian Agency/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("display link home navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Home/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("display link projects navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Projects/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("display link blog navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/Blog/i);
    expect(LinkElement).toBeInTheDocument();
  });

  test("display link about navbar", () => {
    render(<Navigation />);
    const LinkElement = screen.getByText(/About/i);
    expect(LinkElement).toBeInTheDocument();
  });

  // Refactorisation
  // test("display link contact navbar", () => {
  //   render(<Navigation />);
  //   // You can use queries from screen to find elements and make assertions
  //   expect(screen.getByText("Lemurian Agency")).toBeInTheDocument();
  //   expect(screen.getByText("Home")).toBeInTheDocument();
  //   expect(screen.getByText("Projects")).toBeInTheDocument();
  //   expect(screen.getByText("Blog")).toBeInTheDocument();
  //   expect(screen.getByText("About")).toBeInTheDocument();
  //   expect(screen.getByText("Contact")).toBeInTheDocument();
  // });
});
