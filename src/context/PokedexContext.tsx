import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
  Dispatch,
} from "react";
import { Pokemons } from "../@types/Pokemons";
import { getAllPokemonsWithColor } from "../service/requests";
import { PokemonDetails } from "../@types/PokemonDetails";

interface PokemonContextProps {
  pokemons: Pokemons[];
  loading: boolean;
  getAllPokemonsWithColor: () => Promise<Pokemons[]>;
  filteredPokemons: Pokemons[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
  getPokemonById: (id: number) => PokemonDetails | undefined;
}

const PokemonContext = createContext<PokemonContextProps>({
  pokemons: [],
  loading: false,
  getAllPokemonsWithColor: async () => [],
  filteredPokemons: [],
  setSearchTerm: () => {},
  getPokemonById: () => undefined
});

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemons[]>([]);

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
    filterPokemons();
  }, [searchTerm, filterPokemons]);


  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await getAllPokemonsWithColor();
      setPokemons(data);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  const getPokemonById = useCallback((id: number) => {
    return pokemons.find(pokemon => pokemon.id === id);
  }, [pokemons]);

 
  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        setSearchTerm,
        filteredPokemons,
        getAllPokemonsWithColor,
        getPokemonById
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextProps => useContext(PokemonContext);
