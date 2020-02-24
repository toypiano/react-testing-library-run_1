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

## Use React Testing Library to Render and Test React Components

`render` function from `@testing-library/react'

- renders React component to the dom and returns query methods to find element that you want to test within that component.

## Debug the DOM State During Tests using React Testing Library's debug Function

## Test React Component Event Handlers with fireEvent from React Testing Library

```jsx
import user from "@testing-library/user-event";

test("entering an invalid value shows an error message", () => {
  const { getByLabelText, getByRole } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);

  // user generates many events other than just change
  // like focus, click, keypress, keydown, keyup, etc...
  user.type(input, "10");

  expect(getByRole("alert")).toHaveTextContent(
    /the number is invalid/i
  );
});
```

## Test Prop Updates with React Testing Library

```jsx
const { getByLabelText, getByRole, rerender, debug } = render(
    <FavoriteNumber />
  );
...
// re-render component within the same container
// allowing you to test with updated props
rerender(<FavoriteNumber max={10} />);
```

## Assert That Something is NOT Rendered with React Testing Library

```jsx
// this does not pass
// 'Unable to find an accessible element with the role "alert"'
// getBy- queries will throw if the matching elements are not found.
expect(getByRole("alert")).toBeNull();
```
