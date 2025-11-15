import StarshipInfo from "../pages/StarshipInfo";
import { Link } from "react-router";

import reactLogo from "../assets/react.svg";

export default function StarshipCard({ ship, addToCart }) {
  return (
    <>
      <div className="card">
        <Link key={ship.url} to={`/info/${ship.name}`}>
          <img src={reactLogo} alt={ship.name} />
          <p>
            {ship.name} <br /> {ship.model}
            <br />
            {ship.cost_in_credits === "unknown"
              ? "Contact dealer"
              : ship.cost_in_credits}
          </p>
        </Link>
        <br />
        <button onClick={() => addToCart(ship)}>Add to cart</button>
      </div>
    </>
  );
}
