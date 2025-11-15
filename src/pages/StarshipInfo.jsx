import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Link } from "react-router";

export default function StarshipInfo({ ships }) {
  /*
    Properties to include from ship object: 
    name, model, starship_class, manufacturer
    As specs: length, crew, hyperdrive_rating, max_atmosphering_speed, passengers, cargo_capacity
    */

  const navigate = useNavigate();

  const {
    name,
    model,
    starship_class,
    manufacturer,
    length,
    crew,
    hyperdrive_rating,
    max_atmosphering_speed,
    passengers,
    cargo_capacity,
    cost_in_credits
  } = useParams();

// setting state as an object to represent each individual ship
const [info, setInfo] = useState({});

// find if the name of the starship from the object/data matches the name in the parameter
useEffect(() => {
    const starship = ships.find((ship) => ship.name === name);
    // if there is a match, set the state variable to that ship (object)
    if (starship) { setInfo(starship) }
}, [info])

  return (
    <>
    <div className="shipInfo">
      <h1>{info.name}</h1>
      <p><span className="details-text">Model:</span> {info.model} <br /> 
      <span className="details-text">Manufacturer:</span> {info.manufacturer}</p>
      <h2>Specifications</h2>
      <ul>
        <li><span className="details-text">Starship Class:</span> {info.starship_class}</li>
        <li><span className="details-text">Length:</span> {info.length} meters</li>
        <li><span className="details-text">Crew Required:</span> {info.crew} personnel</li>
        <li><span className="details-text">Hyperdrive Rating:</span> {info.hyperdrive_rating}</li>
        <li><span className="details-text">Passengers:</span> {info.passengers} total</li>
        <li><span className="details-text">Cargo Capacity:</span> {info.cargo_capacity}</li>
      </ul>
      <p><span className="details-price">Credits:</span> {info.cost_in_credits}</p>
      <button>Add To Cart</button>
    </div> 
    <br />
    <button onClickCapture={() => navigate(-1)}>Go back</button>
    </>
  );
}
