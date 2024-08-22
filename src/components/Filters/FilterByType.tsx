import { usePokemonContext } from "../../context/PokedexContext";
import { Label, Select } from "./style";

const FilterByType = () => {
  const { setFilterType, types, filterType } = usePokemonContext();

  return (
    <>
      <Label>Type:</Label>
      <Select
        value={filterType || ""}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value="">ALL</option>
        {types.map(( type: { type: { name: string, url: string } }, index) => (
          <option key={index} value={type?.type?.name}>
            {type?.type?.name}
          </option>
        ))}
      </Select>
    </>
  );
};

export default FilterByType;
