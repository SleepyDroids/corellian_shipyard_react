export default function Sort({ ships, sortPrice }) {


  return (
    <>
      <label htmlFor="credit-range">Sort by price:</label>
      <select
        name="credit-range"
        id="credit-range"
        onChange={sortPrice}
      >
        <option value="highToLow">Highest to lowest</option>
        <option value="lowToHigh">Lowest to Highest</option>
      </select>
    </>
  );
}
