export default function SearchBar({ onChange, input }) {
  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter Starship Name"
        onChange={onChange}
        value={input}
        aria-label="Search for a ship by name"
        className="ship-search"
      />
    </>
  );
}
