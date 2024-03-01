import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/Hero";

describe("Hero component", () => {
  // Mock IntersectionObserver
  beforeAll(() => {
    class MockIntersectionObserver {
      constructor() {}

      observe() {
        return null;
      }

      unobserve() {
        return null;
      }

      disconnect() {
        return null;
      }
    }

    window.IntersectionObserver = MockIntersectionObserver;
  });

  it("renders without crashing", () => {
    render(<Hero />);
  });

  it("renders hero content correctly", () => {
    const { getByText } = render(<Hero />);
    expect(getByText("Bienvenue")).toBeInTheDocument();
    expect(getByText("Lemurian Agency")).toBeInTheDocument();
    expect(
      getByText(
        "Je suis Andy Ramaroson, un développeur FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et d'applications sur mesure en me basant sur des technologies web modernes. Je suis spécialisé sur le langage JavaScript avec le framework React & NextJs.",
      ),
    ).toBeInTheDocument();
  });

  // it("renders contact button with correct href", () => {
  //   const { getByText } = render(<Hero />);
  //   const contactButton = getByText("Me contacter");
  //   expect(contactButton).toBeInTheDocument();
  //   expect(contactButton.closest("a")).toHaveAttribute(
  //     "href",
  //     "https://calendly.com/lemurian-agency/30min",
  //   );
  // });

  // it("renders projects button with correct href", () => {
  //   const { getByText } = render(<Hero />);
  //   const projectsButton = getByText("Projets");
  //   expect(projectsButton).toBeInTheDocument();
  //   expect(projectsButton.closest("a")).toHaveAttribute("href", "/projects");
  // });
});
