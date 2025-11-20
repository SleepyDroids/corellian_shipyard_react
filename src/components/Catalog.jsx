import StarshipCard from "./StarshipCard";

export default function Catalog({ ships, input, handleAddToCart }) {


  const searchShips = ships.filter((ship) => {
    input.toLowerCase() === "" ? true : ship.name.toLowerCase().includes(input.toLowerCase());
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
