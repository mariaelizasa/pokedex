export interface PokemonUrl {
    results: Array<{
      name: string;
      url: string;
    }>;
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

export interface Pokemons {
  id: number;
  name: string;
  sprites: PokemonSprites;
  types: Array<{ type: { name: string, url: string } }>;
  stats: PokemonStat[];
  species: {
    url: string;
  };
  color?: string;
}
