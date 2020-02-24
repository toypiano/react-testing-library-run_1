import React from "react";
import { FavoriteNumber } from "../favorite-number";
// testing-library/dom also has fireEvent but this one is specific to React and has some extra features.
import { render, fireEvent } from "@testing-library/react";

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute("type", "number");
});

test("entering an invalid value shows an error message", () => {
  const { getByLabelText, getByRole } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  // fire change event on input with custom event object.
  fireEvent.change(input, { target: { value: "10" } });
  expect(getByRole("alert")).toHaveTextContent(
    /the number is invalid/i
  );
});
