import PokemonIcon from "../../components/Icon/PokemonIcon";
import Loading from "../../components/Loading/Loading";
import { usePokemon } from "../../context/PokedexContext";

const Pokedex = () => {
  const { pokemons, loading } = usePokemon();
  return (
    <>
      <PokemonIcon />
      {loading && <Loading />}
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </>
  );
};

export default Pokedex;
