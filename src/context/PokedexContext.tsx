import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
  Dispatch,
} from "react";
import { Pokemon } from "../@types/Pokedex";
import { getAllPokemonsWithColor } from "../service/requests";

interface PokemonContextProps {
  pokemons: Pokemon[];
  loading: boolean;
  getAllPokemonsWithColor: () => Promise<Pokemon[]>;
  filteredPokemons: Pokemon[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const PokemonContext = createContext<PokemonContextProps>({
  pokemons: [],
  loading: false,
  getAllPokemonsWithColor: async () => [],
  filteredPokemons: [],
  setSearchTerm: () => {},
});

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  const filterPokemons = useCallback(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = pokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        pokemon.id.toString().includes(lowerCaseSearchTerm)
    );
    setFilteredPokemons(filtered);
  }, [searchTerm, pokemons]);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await getAllPokemonsWithColor();
      setPokemons(data);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    filterPokemons();
  }, [searchTerm, filterPokemons]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        setSearchTerm,
        filteredPokemons,
        getAllPokemonsWithColor,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextProps => useContext(PokemonContext);
