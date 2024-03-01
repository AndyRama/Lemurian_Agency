import React from "react";
import { render } from "@testing-library/react";
import CardDescription from "@/app/components/CardDescription";

// Mock IntersectionObserver
class IntersectionObserver {
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

window.IntersectionObserver = IntersectionObserver;

describe("CardDescription component", () => {
  test("renders card description with correct content", () => {
    const { getAllByText, getByAltText } = render(<CardDescription />);

    // Test subtitle
    const subTitle = getAllByText("À propos");
    expect(subTitle[0]).toBeInTheDocument();

    // Test title
    const title = getAllByText(/Qui suis-je !/i);
    title.forEach((element) => {
      expect(element).toBeInTheDocument();
    });

    // Test image alt text
    const imageAltText = getByAltText("Andy profile");
    expect(imageAltText).toBeInTheDocument();

    // Test description content
    const description = getAllByText(/destination/i);
    description.forEach((element) => {
      expect(element).toBeInTheDocument();
    });

    // Test description1 content
    const description1 = getAllByText(/solution web/i);
    description1.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
