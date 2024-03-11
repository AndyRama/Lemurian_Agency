import React from "react";
import { render } from "@testing-library/react";
import Client from "./Client";

describe("Client component", () => {
  test("renders logos correctly", () => {
    const { getAllByAltText } = render(<Client />);

    // Test if all logos are rendered
    const logos = getAllByAltText(/logo\d/);
    expect(logos).toHaveLength(6);
  });
});
