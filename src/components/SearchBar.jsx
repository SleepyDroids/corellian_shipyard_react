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
      />
    </>
  );
}
