import { describe, expect, it } from "vitest";
import { CardIcon, CardIconProps } from "./CardIcon";
import { HomeIcon } from "@heroicons/react/24/outline";
import { render } from "@testing-library/react";

const defaultProps: CardIconProps = {
  icon: HomeIcon,
};

describe("[components/Card]", () => {
  describe("when CardIcon is rendered", () => {
    it("should renderer", () => {
      const { asFragment } = render(<CardIcon {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
