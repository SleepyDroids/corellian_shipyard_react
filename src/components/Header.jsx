import SearchBar from "./SearchBar";
import Sort from "./Sort";

export default function Header({ input, handleChange, ships }) {



  return (
    <header>
      <h1>Starwars Starships</h1>

      <SearchBar onChange={handleChange} input={input} />
      <Sort ships={ships} />
    </header>
  );
}
