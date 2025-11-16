import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Nav from "./Nav";

import { ShoppingCart } from 'lucide-react'

import { useNavigate } from "react-router";

export default function Header({ input, setInput, handleChange, ships, sortPrice }) {
  const navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => navigate("/")}>Corellian Shipyards Starship Emporium ✨</h1>
      <Nav setInput={setInput} />
      <SearchBar onChange={handleChange} input={input} />
      <Sort ships={ships} sortPrice={sortPrice} />

      <ShoppingCart size={55} />
    </header>
  );
}
