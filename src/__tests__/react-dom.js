// add custom jest matchers to test the state of DOM
import {
  toHaveAttribute,
  toHaveTextContent
} from "@testing-library/jest-dom";
import React from "react";
import { FavoriteNumber } from "../favorite-number";
import ReactDOM from "react-dom";

expect.extend({ toHaveAttribute, toHaveTextContent }); // provides more useful

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement("div"); // create a container DOM element
  ReactDOM.render(<FavoriteNumber />, div); // Render ReactElement inside container
  console.log(div.innerHTML); // print component
  // query around container and expect
  expect(div.querySelector("input")).toHaveAttribute(
    "type",
    "number"
  );
  expect(div.querySelector("label").textContent).toBe(
    "Favorite Number"
  );
});
