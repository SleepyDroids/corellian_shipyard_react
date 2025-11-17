import { useMemo } from "react";

import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Nav from "./Nav";

import { ShoppingCart, X } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header({
  input,
  setInput,
  handleChange,
  ships,
  sortPrice,
  show,
  setShow,
  cart,
}) {
  const navigate = useNavigate();

  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, ship) => acc + ship.quantity, 0);
  }, [cart]);

  function handleCartToggle() {
    setShow(!show);
  }

  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        Corellian Shipyards Starship Emporium ✨
      </h1>
      <Nav setInput={setInput} />
      <SearchBar onChange={handleChange} input={input} />
      {/* <Sort ships={ships} sortPrice={sortPrice} /> */}

      {!show ? (
        <div className="cart-icon">
          <ShoppingCart size={48} onClick={handleCartToggle} />
          <span className="cart-icon-num">{totalQuantity || 0}</span>
        </div>
      ) : (
        <div className="cart-icon">
          <X size={48} onClick={handleCartToggle} />
        </div>
      )}
    </header>
  );
}
