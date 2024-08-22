import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
  Dispatch,
  useMemo,
} from "react";
import { PokemonResponse, Pokemons } from "../@types/Pokemons";
import { getAllPokemonsWithColor, getAllTypes } from "../service/requests";
import {  PokemonDetails, Type } from "../@types/PokemonDetails";
import { Types } from "../@types/PokemonTypes";

interface PokemonContextProps {
  pokemons: PokemonResponse;
  types: Types[];
  filterType: string;
  loading: boolean;
  getAllPokemonsWithColor: (
    limit: number,
    offset: number
  ) => Promise<PokemonResponse>;
  filterPokemons: Pokemons[];
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
  filterPokemons: [],
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
  const [pokemons, setPokemons] = useState<PokemonResponse>({
    pokemons: [],
    count: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [types, setTypes] = useState<Types[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const limit = 20;
  
  const offset = useMemo(() => (currentPage - 1) * limit, [currentPage, limit]);

  const filterPokemons = useMemo(() => {
    let filtered = pokemons.pokemons;

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
    return filtered;
  }, [searchTerm, filterType, pokemons]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const { pokemons, count } = await getAllPokemonsWithColor(
          limit,
          offset
        );
        setPokemons({ pokemons, count });
        setTotalPages(Math.ceil(count / limit));
        const data = await getAllTypes();
        setTypes(data);
      } catch (error) {
        console.error("Failed to get response", error);
      }
      setLoading(false);
    };

    fetchPokemons();
  }, [currentPage, limit, offset]);

  const getPokemonById = useCallback(
    (id: number) => {
      return pokemons.pokemons.find((pokemon) => pokemon.id === id);
    },
    [pokemons]
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        setSearchTerm,
        filterPokemons,
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

export const usePokemonContext = (): PokemonContextProps => useContext(PokemonContext);
