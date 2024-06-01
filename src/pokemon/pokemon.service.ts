import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PokemonRepository } from './pokemon.repository';
import { DatabaseService } from 'src/database/database.service';
import { promisify } from 'util';
import { readFile } from 'fs';

const readFileAsync = promisify(readFile);

@Injectable()
export class PokemonService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly pokemonRepository: PokemonRepository,
  ) {}

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
}
