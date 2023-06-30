import { describe, expect, it } from "vitest";
import { Grid, GridProps } from "./Grid";
import { render } from "@testing-library/react";

const defaultProps: GridProps = {
  children: <div></div>,
  className: "class",
};

describe("[components/Grid]", () => {
  describe("when Grid is rendered", () => {
    it("should render", () => {
      const { asFragment } = render(<Grid {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
