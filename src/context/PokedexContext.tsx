import React, { createContext, useContext, useState, useEffect } from "react";
import { Pokemon } from "../@types/Pokedex";
import { getAllPokemons } from "../service/requests";

interface PokemonContextProps {
  pokemons: Pokemon[];
  loading: boolean;
}

const PokemonContext = createContext<PokemonContextProps>({
  pokemons: [],
  loading: false,
});

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await getAllPokemons();
      setPokemons(data);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, loading }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextProps => useContext(PokemonContext);
