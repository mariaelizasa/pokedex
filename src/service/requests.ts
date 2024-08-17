import { Pokemon, PokemonUrl } from "../@types/Pokedex";
import api from "./api";

export const getPokemonUrl = async (
  limit: number = 20
): Promise<PokemonUrl> => {
  const response = await api.get(`pokemon?limit=${limit}`);
  return response.data;
};

export const getAllPokemons = async (
  limit: number = 20
): Promise<Pokemon[]> => {
  const data = await getPokemonUrl(limit);
  const promises = data.results.map(async (pokemon: { url: string }) => {
    const response = await api.get(pokemon.url);
    return response.data;
  });
  return Promise.all(promises);
};
