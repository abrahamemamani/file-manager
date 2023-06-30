import { describe, expect, it } from "vitest";
import { CardTitle, CardTitleProps } from "./CardTitle";
import { render } from "@testing-library/react";

const defaultProps: CardTitleProps = {
  value: "New title",
};

describe("[components/Card]", () => {
  describe("when CardTitle is rendered", () => {
    it("should render", () => {
      const { asFragment } = render(<CardTitle {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
