import React from "react";
import { FavoriteNumber } from "../favorite-number";
import { getQueriesForElement } from "@testing-library/dom";
import ReactDOM from "react-dom";

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement("div"); // create a container DOM element
  ReactDOM.render(<FavoriteNumber />, div); // Render ReactElement inside container

  // return query methods bound with the container
  const { getByLabelText } = getQueriesForElement(div);

  // find input element that correspond to given label text from the specified DOM node.
  // Just like the way the user identifies form control by the label it's associated with.
  const input = getByLabelText(/favorite number/i);

  // query around container and expect
  expect(input).toHaveAttribute("type", "number");
  // `getByLabelText` will throw if it can't find any input that matches given label text.
});
