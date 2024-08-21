import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
  Dispatch,
} from "react";
import { PokemonResponse, Pokemons } from "../@types/Pokemons";
import { getAllPokemonsWithColor, getAllTypes } from "../service/requests";
import { PokemonDetails, Type } from "../@types/PokemonDetails";

interface PokemonContextProps {
  pokemons: PokemonResponse;
  types: Type[];
  filterType: string;
  loading: boolean;
  getAllPokemonsWithColor: () => Promise<PokemonResponse>;
  filteredPokemons: Pokemons[];
  setSearchTerm: Dispatch<SetStateAction<string>>;
  getPokemonById: (id: number) => PokemonDetails | undefined;
  setFilterType: Dispatch<SetStateAction<string>>;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

const PokemonContext = createContext<PokemonContextProps>({
  types: [],
  pokemons: { pokemons: [], count: 0 },
  loading: false,
  getAllPokemonsWithColor: async () => ({ pokemons: [], count: 0 }),
  filteredPokemons: [],
  setSearchTerm: () => {},
  getPokemonById: () => undefined,
  setFilterType: () => {},
  filterType: "",
  totalPages: 0,
  setCurrentPage: () => {},
  currentPage: 1,
});

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemons[]>([]);
  const [filterType, setFilterType] = useState<string>("");
  const [types, setTypes] = useState<Type[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalPokemons, setTotalPokemons] = useState<number>(0);
  const limit = 20;
  const offset = (currentPage - 1) * limit;


  const filterPokemons = useCallback(() => {
    let filtered = pokemons;

    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((typeInfo) => typeInfo.type.name === filterType)
      );
    }

    setFilteredPokemons(filtered);
  }, [searchTerm, filterType, pokemons]);

  useEffect(() => {
    filterPokemons();
  }, [searchTerm, filterPokemons, filterType]);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const { pokemons, count } = await getAllPokemonsWithColor(limit, offset);
      setPokemons(pokemons);
      setLoading(false);
    
      setTotalPokemons(count);
      setTotalPages(Math.ceil(count / limit));

    };

    const fetchTypes = async () => {
      setLoading(true);
      const data = await getAllTypes();
      setTypes(data);
      setLoading(false);
    };

    fetchPokemons();
    fetchTypes();
  }, [currentPage, limit, offset]);

  const getPokemonById = useCallback(
    (id: number) => {
      return pokemons.find((pokemon) => pokemon.id === id);
    },
    [pokemons]
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        setSearchTerm,
        filteredPokemons,
        getAllPokemonsWithColor,
        totalPages,
        setCurrentPage,
        currentPage,
        getPokemonById,
        setFilterType,
        filterType,
        types,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = (): PokemonContextProps => useContext(PokemonContext);

