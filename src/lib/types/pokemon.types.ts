import { Pokemon } from '@prisma/client';

export type Modificator = {
  modificafor: 'WEAK' | 'RESIST' | 'NORMAL';
};

export type Result = {
  result: 'WIN' | 'LOSE';
};

export type PokemonModificatorsResponse = {
  modificators: {
    weakAgainst: Pokemon[] | [];
    resistantAgainst: Pokemon[] | [];
  };
};
