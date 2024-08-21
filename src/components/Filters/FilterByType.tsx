import { usePokemon } from "../../context/PokedexContext";
import { Select } from "./style";

const FilterByType = () => {
  const { setFilterType, types, filterType } = usePokemon();

  return (
    <>
      <label>Type:</label>
      <Select
        value={filterType || ""}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">ALL</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default FilterByType;
