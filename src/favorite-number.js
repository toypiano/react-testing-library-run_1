import React from "react";

function FavoriteNumber({ min = 1, max = 9 }) {
  const [number, setNumber] = React.useState(0);
  const [numberEntered, setNumberEntered] = React.useState(false);
  function handleChange(e) {
    setNumber(Number(e.target.value));
    setNumberEntered(true);
  }
  // validate if number is entered
  const isValid = !numberEntered || (number >= min && number <= max);
  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">The number is invalid</div>}
    </div>
  );
}

export { FavoriteNumber };
