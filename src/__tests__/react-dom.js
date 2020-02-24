import React from "react";
import { FavoriteNumber } from "../favorite-number";
import { getQueriesForElement } from "@testing-library/dom";
import ReactDOM from "react-dom";

// abstract away code for
// 1. creating container
// 2. rendering react component that you want to test inside container
// 3. return query methods bound with that container
function render(ui) {
  const container = document.createElement("div");
  ReactDOM.render(ui, container);
  const queries = getQueriesForElement(container);
  return { container, ...queries };
}

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute("type", "number");
});
