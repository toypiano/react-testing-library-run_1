// add custom jest matchers to test the state of DOM
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { FavoriteNumber } from "../favorite-number";
import ReactDOM from "react-dom";

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
