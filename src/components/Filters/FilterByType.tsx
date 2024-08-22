import { usePokemon } from "../../context/PokedexContext";
import { Label, Select } from "./style";

const FilterByType = () => {
  const { setFilterType, types, filterType } = usePokemon();

  return (
    <>
      <Label>Type:</Label>
      <Select
        value={filterType || ""}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">ALL</option>
        {types.map(( type: { type: { name: string, url: string } }) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default FilterByType;
