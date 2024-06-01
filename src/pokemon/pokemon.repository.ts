import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PokemonRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPokemon: Prisma.PokemonCreateInput) {
    try {
      const createdPokemon = await this.databaseService.pokemon.create({
        data: createPokemon,
      });
      return createdPokemon;
    } catch (error) {
      console.log('ERROR_CREATING_POKEMON', error);
      throw new HttpException('ERROR_CREATING_POKEMON', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      return await this.databaseService.pokemon.findMany();
    } catch (error) {
      console.log('ERROR_FINDING_ALL_POKEMONS', error);
      throw new HttpException(
        'ERROR_FINDING_ALL_POKEMONS',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.databaseService.pokemon.findUnique({ where: { id } });
    } catch (error) {
      console.log('ERROR_FINDING_POKEMON', error);
      throw new HttpException('ERROR_FINDING_POKEMON', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updatePokemon: Prisma.PokemonUpdateInput) {
    try {
      const updatedPokemonDB = await this.databaseService.pokemon.update({
        where: { id },
        data: updatePokemon,
      });
      return updatedPokemonDB;
    } catch (error) {
      console.log('ERROR_UPDATING_POKEMON', error);
      throw new HttpException('ERROR_UPDATING_POKEMON', HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: number) {
    try {
      return await this.databaseService.pokemon.delete({ where: { id } });
    } catch (error) {
      console.log('ERROR_DELETING_POKEMON', error);
      throw new HttpException('ERROR_DELETING_POKEMON', HttpStatus.BAD_REQUEST);
    }
  }

  async mockDataDB(pokemonData: Prisma.PokemonCreateInput[]) {
    try {
      return this.databaseService.pokemon.createMany({ data: pokemonData });
    } catch (error) {
      console.log('ERROR_CREATING_MOCKED_POKEMONS', error);
      throw new HttpException(
        'ERROR_CREATING_MOCKED_POKEMONS',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
