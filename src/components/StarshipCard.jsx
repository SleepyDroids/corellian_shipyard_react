import StarshipInfo from "../pages/StarshipInfo";
import { Link } from "react-router";

export default function StarshipCard({ ship }) {
  return (
    <Link key={ship.url} to={`/info/${ship.name}`}>
      <div className="card">
        <p>
          {ship.name} <br /> {ship.model}
          <br />
          {ship.cost_in_credits === "unknown"
            ? "Contact dealer"
            : ship.cost_in_credits}
            {/* need to change the logic here because of my price sort */}
        </p>
      </div>
    </Link>
  );
}
