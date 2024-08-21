export interface Stat {
  stat: {
    name: string;
  };
  base_stat: number;
}

export interface Type {
  type: {
    name: string;
  };
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    color?: string; 
    types: Type[];
    stats: Stat[];
    sprites: {
      front_default: string;
      front_shiny: string;
    };
  }
  