import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { promisify } from 'util';
import { readFile } from 'fs';

const readFileAsync = promisify(readFile);

@Injectable()
export class PokemonService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPokemon: Prisma.PokemonCreateInput) {
    return this.databaseService.pokemon.create({ data: createPokemon });
  }

  async findAll() {
    return this.databaseService.pokemon.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.pokemon.findUnique({ where: { id } });
  }

  async update(id: number, updatedPokemon: Prisma.PokemonUpdateInput) {
    return this.databaseService.pokemon.update({
      where: { id },
      data: updatedPokemon,
    });
  }

  async delete(id: number) {
    return this.databaseService.pokemon.delete({ where: { id } });
  }

  async mockDataDB() {
    const data = await readFileAsync('pokemon-data.json', 'utf8');
    const pokemonData = JSON.parse(data);
    return this.databaseService.pokemon.createMany({ data: pokemonData });
  }
}
