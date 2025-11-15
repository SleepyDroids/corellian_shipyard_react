import StarshipInfo from "./StarshipInfo";
import { Link } from "react-router";

export default function StarshipCard({ ship }) {
  return (
    <Link key={ship.url} to={`/info/${ship.name}`}>
      <div className="card">
        <p>
          {ship.name} <br /> {ship.model}
          <br />
          {ship.cost_in_credits === "unknown"
            ? "infinite"
            : ship.cost_in_credits}
        </p>
      </div>
    </Link>
  );
}
