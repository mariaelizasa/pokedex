import PokemonIcon from "../../components/Icon/PokemonIcon";
import Loading from "../../components/Loading/Loading";
import { usePokemon } from "../../context/PokedexContext";
import { Card, CardContainer, CardId, CardImage, CardName } from "./style";

const Pokedex = () => {
  const { pokemons, loading } = usePokemon();
  console.log(pokemons, "teste")
  
  return (
    <>
      {loading ? (
        <Loading /> 
      ) : (
        <>
          <PokemonIcon />
          <CardContainer>
            {pokemons.map((pokemon) => (
              <Card key={pokemon.id} color={pokemon.color}>
                <CardId>{`#00${pokemon.id}`}</CardId>
                <CardImage
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  alt={pokemon.name}
                />
                <CardName>{pokemon.name}</CardName>
              </Card>
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
};

export default Pokedex;
