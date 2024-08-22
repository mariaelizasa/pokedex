import { usePokemonContext } from "../../context/PokedexContext";
import NotFound from "../NotFound/NotFound";
import { Input } from "./style";

const FilterByNameAndId = () => {
  const { setSearchTerm, filterPokemons } = usePokemonContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Search by ID or Name..."
        onChange={handleChange}
      />
    
    </>
  );
};

export default FilterByNameAndId;
