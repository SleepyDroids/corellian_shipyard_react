import SearchBar from "./SearchBar";
import Sort from "./Sort";
import Nav from "./Nav";

import { useNavigate } from "react-router";

export default function Header({ input, handleChange, ships }) {
  const navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => navigate("/")}>Starwars Starships</h1>
      <Nav />
      <SearchBar onChange={handleChange} input={input} />
      <Sort ships={ships} />
    </header>
  );
}
