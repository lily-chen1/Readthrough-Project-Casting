import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


const SearchBar = ({setSearchQuery}) => (
    <form>
        {/* <SearchIcon /> */}
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Search Projects"
        variant="outlined"
        placeholder="Search Projects"
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        
      </IconButton>
    </form>
  );

  export default SearchBar;