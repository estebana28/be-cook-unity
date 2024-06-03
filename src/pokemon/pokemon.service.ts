import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Pokemon, Prisma } from '@prisma/client';
import { PokemonModificatorsResponse } from '../lib/types/pokemon.types';
import { PokemonRepository } from './pokemon.repository';
import { promisify } from 'util';
import { readFile } from 'fs';
import { calculateBattleResult } from './utils/pokemon.auxiliary';

const readFileAsync = promisify(readFile);

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async create(createPokemon: Prisma.PokemonCreateInput) {
    const newPokemon = await this.pokemonRepository.create({
      ...createPokemon,
    });
    return newPokemon;
  }

  async findAll() {
    const allPokemon = await this.pokemonRepository.findAll();
    return allPokemon;
  }

  async findOne(id: number) {
    const pokemon = await this.pokemonRepository.findOne(id);
    if (!pokemon) {
      throw new HttpException('ERROR_FINDING_POKEMON', HttpStatus.BAD_REQUEST);
    }
    return pokemon;
  }

  async update(id: number, updatedPokemon: Prisma.PokemonUpdateInput) {
    const updatedPokemonDB = await this.pokemonRepository.update(
      id,
      updatedPokemon,
    );
    return updatedPokemonDB;
  }

  async delete(id: number) {
    const deletedPokemon = await this.pokemonRepository.delete(id);
    return deletedPokemon;
  }

  async mockDataDB() {
    const data = await readFileAsync('pokemon-data.json', 'utf8');
    const pokemonData = JSON.parse(data);
    return this.pokemonRepository.mockDataDB(pokemonData);
  }

  async getWeakAndResist(id: number) {
    const pokemon = await this.pokemonRepository.findOne(id);
    const weakAgainstPromises = await pokemon.weaknesses?.map(
      async (weakness) => await this.pokemonRepository.findByType(weakness),
    );
    const resistantAgainstPromises = await pokemon.resistances?.map(
      (resistance) => this.pokemonRepository.findByType(resistance),
    );

    const weakAgainstArrays = await Promise.all(weakAgainstPromises);
    const weakAgainst: Pokemon[] = weakAgainstArrays.flat();

    const resistantAgainstArrays = await Promise.all(resistantAgainstPromises);
    const resistantAgainst: Pokemon[] = resistantAgainstArrays.flat();

    const response: PokemonModificatorsResponse = {
      modificators: {
        weakAgainst: weakAgainst || [],
        resistantAgainst: resistantAgainst || [],
      },
    };

    return response;
  }

  async getBattleResult(id: number, against: number) {
    const pokemon = await this.pokemonRepository.findOne(id);
    const againstPokemon = await this.pokemonRepository.findOne(against);
    const result = await calculateBattleResult(pokemon, againstPokemon);
    return result;
  }
}
