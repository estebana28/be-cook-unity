import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

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
}
