import SearchBar from "./SearchBar";

export default function Header({ input, handleChange }) {
  return (
    <header>
      <h1>Starwars Starships</h1>

      <SearchBar onChange={handleChange} input={input} />
    </header>
  );
}
