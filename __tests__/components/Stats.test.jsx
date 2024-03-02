import React from "react";
import { render } from "@testing-library/react";
import Stats from "@/app/components/Stats";
describe("code snippet", () => {
  // Renders a section with stats and a CTA.
  it("should render a section with stats and a CTA", () => {
    // Arrange

    // Act
    const wrapper = shallow(<Stats />);

    // Assert
    expect(wrapper.find("section")).toHaveLength(1);
    expect(wrapper.find(".text-center")).toHaveLength(statContent.stats.length);
    expect(wrapper.find(".text-heading")).toHaveLength(1);
    expect(wrapper.find(".text-md")).toHaveLength(1);
    expect(wrapper.find("Link")).toHaveLength(1);
  });

  // statContent object is empty.
  it("should render a section with empty stats and CTA", () => {
    // Arrange
    const emptyStatContent = {
      stats: [],
      getStarted: {
        heading: "",
        description: "",
        image: "",
        cta: {
          cta_href: "",
          cta_label: "",
        },
      },
    };

    // Act
    const wrapper = shallow(<Stats />);

    // Assert
    expect(wrapper.find(".text-center")).toHaveLength(0);
    expect(wrapper.find(".text-heading")).toHaveLength(0);
    expect(wrapper.find(".text-md")).toHaveLength(0);
    expect(wrapper.find("Link")).toHaveLength(0);
  });
});
