import PokemonCard from "../../components/Card/PokemonCard";
import FilterByNameAndId from "../../components/Filters/FilterByNameAndId";
import FilterByType from "../../components/Filters/FilterByType";
import PokemonIcon from "../../components/Icon/PokemonIcon";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import { usePokemon } from "../../context/PokedexContext";
import { Filters } from "./style";

const Pokedex = () => {
  const { filteredPokemons, loading } = usePokemon();

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
          <PokemonCard pokemons={filteredPokemons} />
          <Pagination/>
        </>
      )}
    </>
  );
};

export default Pokedex;
