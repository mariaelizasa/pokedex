import PokemonCard from "../../components/Card/PokemonCard";
import FilterByNameAndId from "../../components/Filters/FilterByNameAndId";
import PokemonIcon from "../../components/Icon/PokemonIcon";
import Loading from "../../components/Loading/Loading";
import { usePokemon } from "../../context/PokedexContext";

const Pokedex = () => {
  const { filteredPokemons, loading } = usePokemon();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PokemonIcon />
          <FilterByNameAndId></FilterByNameAndId>

          <PokemonCard pokemons={filteredPokemons} />
        </>
      )}
    </>
  );
};

export default Pokedex;
