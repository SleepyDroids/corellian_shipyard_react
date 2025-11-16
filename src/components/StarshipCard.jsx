import StarshipInfo from "../pages/StarshipInfo";
import { Link } from "react-router";

import reactLogo from "../assets/react.svg";

export default function StarshipCard({ ship, addToCart }) {
  return (
    <>
      <div className="card">
        <img src={reactLogo} alt={ship.name} />
        <p>
          <span className="ship-name">{ship.name}</span>
          <br /> {ship.model}
          <br />₹{" "}
          {ship.cost_in_credits === "unknown"
            ? "Contact dealer"
            : ship.cost_in_credits}
        </p>

        <br />
        <Link key={ship.url} to={`/info/${ship.name}`}>
          <button>View Details</button>
        </Link>
        <button onClick={() => addToCart(ship)}>Add to cart</button>
      </div>
    </>
  );
}
