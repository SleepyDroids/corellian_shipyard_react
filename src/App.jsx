import { useState, useEffect, useRef, useReducer } from "react";
import "./index.css";

// Importing function to retrieve data from the API
import { getAllStarships } from "../services/sw-api.js";

// Importing components
import Header from "./components/Header.jsx";
import Catalog from "./components/Catalog.jsx";
import CartPanel from "./components/CartPanel.jsx";
import StarshipInfo from "./pages/StarshipInfo.jsx";
import Cart from "./pages/Cart.jsx";

// Importing routes
import { Routes, Route, Navigate } from "react-router";

// retrieving cart data from localStorage
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
  // starting the initial state as null to account for the ternary
  // it is a falsy value so it won't render the StarshipCard component unless there is data available to fill the out
  const [starship, setStarship] = useState(null);
  const [filteredShips, setFilteredShips] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(cartStorage);

  // useEffect for API call
  useEffect(() => {
    const beholdStarships = async () => setStarship(await getAllStarships());
    beholdStarships();
  }, []);

  // useEffect for Cart persistance across user refreshes (unless they click clear cart)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // HANDLERS ***
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAddToCart(ship) {
    setCart((prev) => {
      const duplicateIndex = prev.findIndex((item) => item.name === ship.name);
      if (duplicateIndex !== -1) {
        const newCart = [...prev];
        newCart[duplicateIndex].quantity++;
        return newCart;
      } else {
        return [...prev, { ...ship, quantity: 1 }];
      }
    });
  }

  function handlePriceSort(e) {
    console.log("handling price sorter");
  }

  function handleItemDelete(name) {
    console.log("removed starship from cart");
  const removedShip = cart.filter((ship) => ship.name !== name);
  setCart(removedShip);

  }

  function handleClearCart() {
    setCart([]);
    localStorage.clear();
  }

  // LOADED STATE ***
  const loaded = () => (
    <>
      <Header
        input={input}
        handleChange={handleInputChange}
        ships={starship}
        setInput={setInput}
        sortPrice={handlePriceSort}
        show={show}
        setShow={setShow}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Catalog
              ships={starship}
              input={input}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/info/:name"
          element={
            <StarshipInfo
              ships={starship}
              cart={cart}
              addToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} clearCart={handleClearCart} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <CartPanel cart={cart} clearCart={handleClearCart} show={show} handleRemove={handleItemDelete} />
    </>
  );

  const loading = () => (
    <>
      <Header
        input={input}
        handleChange={handleInputChange}
        ships={starship}
        setInput={setInput}
        sortPrice={handlePriceSort}
        show={show}
        setShow={setShow}
      />
      <div className="fleet">
        <p>There is a disturbance in the force, please wait...</p>
      </div>
    </>
  );

  return starship ? loaded() : loading();
}

export default App;
