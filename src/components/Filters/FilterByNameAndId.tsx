import { usePokemon } from "../../context/PokedexContext";
import { Input, InputContainer} from "./style";

const FilterByNameAndId = () => {
  const { setSearchTerm, pokemons } = usePokemon();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  console.log("teste", pokemons)
  return (
    <>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search by ID or Name..."
          onChange={handleChange}
        />
      </InputContainer>
    </>
  );
};

export default FilterByNameAndId;
