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
  const [starship, setStarship] = useState([]);
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
    const removedShip = cart.filter((ship) => ship.name !== name);
    setCart(removedShip);
  }

  function handleClearCart() {
    setCart([]);
    localStorage.clear();
  }

  function handleIncrement(ship) {
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

  function handleDecrement(ship) {
    setCart((prev) => {
      const findByIndex = prev.findIndex((item) => item.url === ship.url);
      // Utilizing the cart's version of the ship (as in state controlled)
      const foundShip = prev[findByIndex];

      // If quantity is 1 and user click's on the - it should remove the item from the cart entirely
      // same filter method used in to do list
      // so a NEW version of the cart with the ship item removed and this becomes the current state
      if (foundShip.quantity === 1) {
        return prev.filter((item) => item.url !== ship.url);
      }

      // Accounting for if the ship quantity is greater than 1 (as in any other case)
      // so should be similar to increment / addToCart functionality
      const newCart = [...prev];
      // Target the specific ship's quantity I am trying to decrement
      // Okay to mutate here since I am mutating a copy of prev (state) aka newCart
      // And create a new ship object and override its quantity value
      // When I return newCart, React notices that it is a new parking space with a new object and that the ship at this particular position has in fact changed
      newCart[findByIndex] = { ...foundShip, quantity: foundShip.quantity - 1 };
      return newCart;
    });
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
        cart={cart}
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
              handleRemove={handleItemDelete}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              clearCart={handleClearCart}
              handleRemove={handleItemDelete}
              increase={handleIncrement}
              decrease={handleDecrement}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <CartPanel
        cart={cart}
        clearCart={handleClearCart}
        show={show}
        handleRemove={handleItemDelete}
      />
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
        cart={cart}
      />
      <div className="fleet">
        <p>There is a disturbance in the force, please wait...</p>
      </div>
    </>
  );

  return starship ? loaded() : loading();
}

export default App;
