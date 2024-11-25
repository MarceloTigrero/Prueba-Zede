const SearchBar = ({ setSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  