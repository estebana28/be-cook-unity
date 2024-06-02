import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Prisma } from '@prisma/client';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  /*
  GET /pokemon
  GET /pokemon/:id
  POST /pokemon
  PATCH /pokemon/:id
  DELETE /pokemon/:id
  */

  @Post() // POST /pokemon
  create(@Body() createPokemon: Prisma.PokemonCreateInput) {
    return this.pokemonService.create(createPokemon);
  }

  @Get() // GET /pokemon
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get('/all') // GET /pokemon/all Mock data
  mockDataDB() {
    return this.pokemonService.mockDataDB();
  }

  @Get(':id') // GET /pokemon/:id
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  @Patch(':id') // PATCH /pokemon/:id
  update(
    @Param('id') id: string,
    @Body() updatePokemon: Prisma.PokemonUpdateInput,
  ) {
    return this.pokemonService.update(+id, updatePokemon);
  }

  @Delete(':id') // DELETE /pokemon/:id
  delete(@Param('id') id: string) {
    return this.pokemonService.delete(+id);
  }

  @Get('weak-and-resist/:id') // GET /pokemon/weakAndResist/:id
  getWeakAndResist(@Param('id') id: string) {
    return this.pokemonService.getWeakAndResist(+id);
  }

  @Get('/battle/:id/:against') // POST /pokemon/battle/:id/:against
  getBattleResult(@Param('id') id: string, @Param('against') against: string) {
    return this.pokemonService.getBattleResult(+id, +against);
  }
}
