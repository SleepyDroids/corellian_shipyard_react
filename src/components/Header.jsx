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
}) {
  const navigate = useNavigate();

  function handleCartToggle() {
    setShow(!show);
    console.log(`show variable: ${show}`);
  }

  return (
    <header>
      <h1 onClick={() => navigate("/")}>
        Corellian Shipyards Starship Emporium ✨
      </h1>
      <Nav setInput={setInput} />
      <SearchBar onChange={handleChange} input={input} />
      <Sort ships={ships} sortPrice={sortPrice} />

      {!show ? (
        <ShoppingCart size={48} onClick={handleCartToggle} />
      ) : (
        <X size={48} onClick={handleCartToggle} />
      )}
    </header>
  );
}

