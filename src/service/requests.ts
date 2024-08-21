import { PokemonResponse, Pokemons, PokemonUrl } from "../@types/Pokemons";
import api from "./api";

export const getPokemonUrl = async (
  limit: number,
  offset: number
): Promise<PokemonUrl> => {
  const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return {
    results: response.data.results,
    count: response.data.count,
  };
};

export const getAllPokemons = async (
  limit: number,
  offset: number
): Promise<PokemonResponse> => {
  const { results, count } = await getPokemonUrl(limit, offset);
  const promises = results.map(async (pokemon: { url: string }) => {
    const response = await api.get(pokemon.url);
    return response.data;
  });

  const pokemons = await Promise.all(promises);
  return { pokemons, count };
};

const getSpeciesData = async (speciesUrl: string) => {
  const response = await api.get(speciesUrl);
  return response.data;
};

export const getAllPokemonsWithColor = async (
  limit: number,
  offset: number
): Promise<PokemonResponse> => {
  const { pokemons, count } = await getAllPokemons(limit, offset);
  const pokemonWithColors = await Promise.all(
    pokemons.map(async (pokemon: Pokemons) => {
      const speciesData = await getSpeciesData(pokemon.species.url);
      return {
        color: speciesData.color.name,
        ...pokemon,
      };
    })
  );
  return { pokemons: pokemonWithColors, count };
};

export const getAllTypes = async () => {
  const response = await api.get("/type");
  return response.data.results;
};
