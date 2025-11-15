import { useState } from "react";

export default function Sort({ ships }) {
  const [priceSort, setPriceSort] = useState("");

  // need to account for entries that are NaN from data or convert data back to string after sorting by number
  // and then link this to my data displayed on the Catalog (maybe useContext???)

  // technically only sorting numbers at the moment but nothing is attached to the specific ship data
  // deal with NaN first, then will probably move this logic to App.jsx for simplicity atm
  const shipNameAndCost =
    ships &&
    ships.map((ship) => {
        const newShip = { name: ship.name, cost: ship.cost_in_credits }
        return newShip;
    });

  // console.log(shipNameAndCost);

  function handlePriceSort(e) {
    console.log("handling price sorter");
    const l2h = shipCredits.sort((a, b) => a - b);
    const h21 = shipCredits.sort((a, b) => b - a);

    console.log(l2h);

    if (e.target.value === "lowToHigh") {
      // something with sort here
    } else if (e.target.value === "highToLow") {
      // return sort here as well
    }
  }

  return (
    <>
      <label htmlFor="credit-range">Sort by price:</label>
      <select
        name="credit-range"
        id="credit-range"
        onChange={handlePriceSort}
        value={priceSort}
      >
        <option value="highToLow">Highest to lowest</option>
        <option value="lowToHigh">Lowest to Highest</option>
      </select>
    </>
  );
}
