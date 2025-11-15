import StarshipCard from "./StarshipCard";

export default function Catalog({ ships, input, cart, setCart }) {
  function handleAddToCart(ship) {
    // logic needs to update cart state by pushing a ship object into cart
    // like the pokdex morning exercise
    console.log("adding to cart!");
    // Take the singular ship object as an argument, making a copy of cart and then "push" that ship object into the cart array
    setCart([...cart, ship])
  }

  const searchShips = ships.filter((ship) => {
    if (input.toLowerCase() === "") {
      return true;
    }
    return ship.name.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <main className="fleet">
      <div className="fleet-grid">
        {/* Does this filtered array at least have one item? */}
        {searchShips.length > 0 ? (
          searchShips.map((ship) => (
            <StarshipCard
              key={ship.url}
              ship={ship}
              addToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No starships match that search.</p>
        )}
      </div>
    </main>
  );
}
