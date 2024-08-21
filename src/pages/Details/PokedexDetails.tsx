import { usePokemon } from "../../context/PokedexContext";
import { useParams } from "react-router-dom";
import {
  Card,
  Container,
  Image,
  SectionImage,
  Ball,
  SectionType,
  SectionStats,
} from "./style";

const PokedexDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { getPokemonById } = usePokemon();

  const pokemon = getPokemonById(Number(id));
  return (
    <Container>
      <Card color={pokemon?.color}>
        <h1>{pokemon?.name}</h1>
        <h3>{`N° 0${pokemon?.id}`}</h3>
        <SectionType color={pokemon?.color}>
          <h3>TYPES:</h3>
          {pokemon?.types.map(
            (types: { type: { name: string } }, index: number) => (
              <p key={index}>{types.type.name}</p>
            )
          )}
        </SectionType>
        <SectionImage color={pokemon?.color}>
          <Image src={pokemon?.sprites.front_default} />
          <Ball />
          <Image src={pokemon?.sprites.front_shiny} />
        </SectionImage>

        <SectionStats color={pokemon?.color}>
          <h3>STATS:</h3>
          {pokemon?.stats.map(
            (
              stats: { stat: { name: string }; base_stat: number },
              index: number
            ) => (
              <p key={index}>
                {stats.stat.name.replace("-", " ")}:{" "}
                <span>{stats.base_stat}</span>
              </p>
            )
          )}
        </SectionStats>
      </Card>
    </Container>
  );
};

export default PokedexDetails;
