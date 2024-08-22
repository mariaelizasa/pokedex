import { PokemonResponse, Pokemons, PokemonUrl } from "../@types/Pokemons";
import api from "./api";

export const getPokemonUrl = async (
  limit: number,
  offset: void
): Promise<PokemonUrl> => {
  try {
    const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
    return {
      results: response.data.results,
      count: response.data.count,
    };
  } catch (error) {
    console.error("Error getting URL of all Pokémon:", error);
    throw error;
  }
};

export const getAllPokemons = async (
  limit: number,
  offset: void
): Promise<PokemonResponse> => {
  try {
    const { results, count } = await getPokemonUrl(limit, offset);
    const promises = results.map(async (pokemon: { url: string }) => {
      const response = await api.get(pokemon.url);
      return response.data;
    });

    const pokemons = await Promise.all(promises);
    return { pokemons, count };
  } catch (error) {
    console.error("Error getting all Pokémon:", error);
    throw error;
  }
};

const getSpeciesData = async (speciesUrl: string) => {
  try {

  const response = await api.get(speciesUrl);
  return response.data;
  }
  catch(error) {
    console.error("Error getting species data:", error);
    throw error;
  }
};

export const getAllPokemonsWithColor = async (
  limit: number,
  offset: void
): Promise<PokemonResponse> => {
  try {
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
}
catch(error){
  console.error("Error getting all colored Pokémon:", error);
  throw error;
}
};

export const getAllTypes = async () => {
  try {
  const response = await api.get("/type");
  return response.data.results;
  }
  catch(error){
    console.error("Error getting all types:", error);
  throw error;
  }
};
