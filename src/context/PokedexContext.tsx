import React, { createContext, useContext, useState, useEffect } from "react";
import { Pokemon } from "../@types/Pokedex";
import { getAllPokemonsWithColor } from "../service/requests";

interface PokemonContextProps {
  pokemons: Pokemon[];
  loading: boolean;
  getAllPokemonsWithColor: () => Promise<Pokemon[]>;
}

const PokemonContext = createContext<PokemonContextProps>({
  pokemons: [],
  loading: false,
  getAllPokemonsWithColor: async () => [],
});

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await getAllPokemonsWithColor();
      setPokemons(data);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ pokemons, loading, getAllPokemonsWithColor }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextProps => useContext(PokemonContext);
