import React from "react";
import { render } from "@testing-library/react";
import Client from "@/app/components/Client";

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    // Ajoutez une implémentation vide de la méthode observe
  }

  unobserve() {
    // Ajoutez une implémentation vide de la méthode unobserve
  }
};

describe("Client component", () => {
  test("renders logos correctly", () => {
    const { getAllByAltText } = render(<Client />);

    // Test if all logos are rendered
    const logos = getAllByAltText(/logo\d/);
    expect(logos).toHaveLength(6);
  });
});
