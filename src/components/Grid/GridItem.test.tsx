import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { GridItem, GridItemProps } from "./GridItem";

const defaultProps: GridItemProps = {
  children: <span>Children</span>,
};

describe("[components/Grid]", () => {
  describe("when GridItem is rendered", () => {
    it("should render", () => {
      const { asFragment } = render(<GridItem {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
