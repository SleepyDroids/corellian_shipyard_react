import { useState, useEffect, useRef, useReducer } from "react";
import "./index.css";

// Importing function to retrieve data from the API
import { getAllStarships } from "../services/sw-api.js";

// Importing components
import Header from "./components/Header.jsx";
import Catalog from "./components/Catalog.jsx";
import CartPanel from "./components/CartPanel.jsx";
import StarshipInfo from "./pages/StarshipInfo.jsx";

// Importing routes
import { Routes, Route, Navigate } from "react-router";

function App() {
  // starting the initial state as null to account for the ternary
  // it is a falsy value so it won't render the StarshipCard component unless there is data available to fill the out
  const [starship, setStarship] = useState(null);
  const [filteredShips, setFilteredShips] = useState([]);
  const [input, setInput] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, addToCart] = useState([]);

  useEffect(() => {
    const beholdStarships = async () => setStarship(await getAllStarships());
    beholdStarships();
  }, []);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  const loaded = () => (
    <main>
      <Header input={input} handleChange={handleInputChange} ships={starship} />
      <Routes>
        <Route path="/" element={<Catalog ships={starship} input={input} />} />
        <Route path="/info/:name" element={<StarshipInfo ships={starship} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <CartPanel cart={cart} ships={starship} />
    </main>
  );

  const loading = () => (
    <main>
      <Header input={input} handleChange={handleInputChange} ships={starship} />
      <div className="fleet">
        <p>There is a disturbance in the force, please wait...</p>
      </div>
    </main>
  );

  return starship ? loaded() : loading();
}

export default App;
