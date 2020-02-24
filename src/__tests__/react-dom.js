import React from "react";
import { FavoriteNumber } from "../favorite-number";
import { render } from "@testing-library/react";

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText, debug } = render(<FavoriteNumber />);
  debug(); // print entire component
  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute("type", "number");
  debug(input); // print only passed element
});
