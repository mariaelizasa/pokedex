import PokemonCard from "../../components/Card/PokemonCard";
import FilterByNameAndId from "../../components/Filters/FilterByNameAndId";
import FilterByType from "../../components/Filters/FilterByType";
import PokemonIcon from "../../components/Icon/PokemonIcon";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";
import Pagination from "../../components/Pagination/Pagination";
import { usePokemonContext } from "../../context/PokedexContext";
import { Filters } from "./style";

const Pokedex = () => {
  const { filterPokemons, loading } = usePokemonContext();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PokemonIcon />
          <Filters>
            <FilterByNameAndId></FilterByNameAndId>
            <FilterByType></FilterByType>
          </Filters>
          {filterPokemons.length === 0 && <NotFound></NotFound>}
          <PokemonCard pokemons={filterPokemons} />
          <Pagination />
        </>
      )}
    </>
  );
};

export default Pokedex;
