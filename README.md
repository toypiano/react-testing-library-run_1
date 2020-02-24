# Test React Components with Jest and React Testing Library

## Render a React Component for Testing

## Use Jest DOM for Improved Assertions

`@testing-library/jest-dom` contains custom jest matchers that returns useful information on test failure.

- Using `type` property of DOM node

  ```js
  expect(div.querySelector("inpu").type).toBe("number");
  ```

  - Gives TypeError for typo in query

  ```
   TypeError: Cannot read property 'type' of null

      12 |   console.log(div.innerHTML); // print component
      13 |   // query around container and expect
    > 14 |   expect(div.querySelector("inpu").type).toBe("number");
         |          ^
  ```

- Using `jest-dom`'s `toHaveAttribute`

  ```js
  expect(div.querySelector("inpu")).toHaveAttribute("type", "number");
  ```

  - gives more useful information

  ```
  expect(received).toHaveAttribute()

    received value must be an HTMLElement or an SVGElement.
    Received has value: null

      12 |   console.log(div.innerHTML); // print component
      13 |   // query around container and expect
    > 14 |   expect(div.querySelector("inpu")).toHaveAttribute("type", "number");
         |                                     ^
  ```

## Use DOM Testing Library to Write More Maintainable React Tests

## Test React Components with Jest and React Testing Library.
