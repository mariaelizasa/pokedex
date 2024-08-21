import { useNavigate } from "react-router-dom";
import { Pokemons } from "../../@types/Pokemons";
import { Card, CardContainer, CardId, CardImage, CardName } from "./style";

interface PokemonCardProps {
  pokemons: Pokemons[];
}
const PokemonCard = ({ pokemons }: PokemonCardProps) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <CardContainer>
        {pokemons.map((pokemon: any) => (
          <Card
            key={pokemon.id}
            color={pokemon.color}
            onClick={() => handleClick(pokemon.id)}
          >
            <CardId>{`N° 0${pokemon.id}`}</CardId>
            <CardImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
            />
            <CardName>{pokemon.name}</CardName>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default PokemonCard;
