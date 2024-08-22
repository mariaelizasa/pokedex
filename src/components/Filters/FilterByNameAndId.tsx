import { usePokemonContext } from "../../context/PokedexContext";
import { Input } from "./style";

const FilterByNameAndId = () => {
  const { setSearchTerm } = usePokemonContext();

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
