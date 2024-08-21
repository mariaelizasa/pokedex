import { Pokemons, PokemonUrl } from "../@types/Pokemons";
import api from "./api";

export const getPokemonUrl = async (
  limit: number = 20
): Promise<PokemonUrl> => {
  const response = await api.get(`pokemon?limit=${limit}`);
  return response.data;
};

export const getAllPokemons = async (): Promise<Pokemons[]> => {
  const data = await getPokemonUrl();
  const promises = data.results.map(async (pokemon: { url: string }) => {
    const response = await api.get(pokemon.url);
    return response.data;
  });
  return Promise.all(promises);
};

const getSpeciesData = async (speciesUrl: string) => {
  const response = await api.get(speciesUrl);
  return response.data;
};

export const getAllPokemonsWithColor = async (): Promise<Pokemons[]> => {
  const data = await getAllPokemons();
  const pokemonWithColors = await Promise.all(
    data.map(async (pokemon: Pokemons) => {
      const speciesData = await getSpeciesData(pokemon.species.url);
      

      return {
        color: speciesData.color.name,
        ...pokemon,
      };
    })
  );
  return pokemonWithColors;
};
