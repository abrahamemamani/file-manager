import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Card, CardProps } from "./Card";

interface ICard {
  name: string;
}

const data: ICard = {
  name: "Card Name",
};

const defaultProps: CardProps<ICard> = {
  data,
  children: () => <></>,
  onClick: () => console.log("onClick"),
};

describe("[components/Card]", () => {
  afterEach(() => {
    cleanup();
  });
  describe("when Card is rendered", () => {
    it("should renderer", () => {
      const { asFragment } = render(<Card {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe("when click on the component", () => {
    it("should call onClick function", () => {
      const props = {
        ...defaultProps,
        onClick: vi.fn(),
      };
      render(<Card {...props} />);
      fireEvent.click(screen.getByTestId("flowbite-card"));
      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
