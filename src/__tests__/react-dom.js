import React from "react";
// If you want to simulate user interaction as close as possible
import user from "@testing-library/user-event";
import { FavoriteNumber } from "../favorite-number";
// testing-library/dom also has fireEvent but this one is specific to React and has some extra features.
import { render } from "@testing-library/react";

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute("type", "number");
});

test("entering an invalid value shows an error message", () => {
  const { getByLabelText, getByRole, rerender, debug } = render(
    <FavoriteNumber />
  );
  const input = getByLabelText(/favorite number/i);
  user.type(input, "10");

  expect(getByRole("alert")).toHaveTextContent(
    /the number is invalid/i
  );
  rerender(<FavoriteNumber max={10} />);
  // this does not pass
  // 'Unable to find an accessible element with the role "alert"'
  // getBy- queries will throw if the matching elements are not found.
  expect(getByRole("alert")).toBeNull();
});
