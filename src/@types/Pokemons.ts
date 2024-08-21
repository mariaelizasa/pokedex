export interface PokemonUrl {
    results: Array<{
      name: string;
      url: string;
    }>;
    count: number;
  }

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
}

export interface Type {
  type: {
    name: string;
    url: string
  };
}

export interface Pokemons {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: Type[];
  stats: PokemonStat[];
  species: {
    url: string;
  };
  color?: string;
  height: number;
  weight: number;
}

export interface PokemonResponse {
  pokemons: Pokemons[];
  count: number; 
}