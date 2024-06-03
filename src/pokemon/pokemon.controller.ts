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
import {
  ApiBody,
  ApiParam,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import {
  CreatePokemonDto,
  UpdatePokemonDto,
  DeletePokemonDto,
  GetPokemonDTO,
  ModificatorsPokemonDto,
  BattlePokemonDto,
} from './dto';

@ApiTags('pokemon')
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

  // POST /pokemon
  @Post()
  @ApiOperation({ summary: 'Create a new Pokemon' })
  @ApiBody({ type: CreatePokemonDto, description: 'The new Pokemon data' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: CreatePokemonDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createPokemon: Prisma.PokemonCreateInput) {
    return this.pokemonService.create(createPokemon);
  }

  // GET /pokemon
  @Get()
  @ApiOperation({ summary: 'Get all Pokemon' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: CreatePokemonDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findAll() {
    return this.pokemonService.findAll();
  }

  // GET /pokemon/all
  @Get('/all')
  @ApiOperation({
    summary: 'Create a mocked database with all Pokemon in the challenge',
  })
  @ApiResponse({
    status: 200,
    description: 'The records has been successfully created.',
    type: GetPokemonDTO,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  mockDataDB() {
    return this.pokemonService.mockDataDB();
  }

  // GET /pokemon/:id
  @Get(':id')
  @ApiOperation({ summary: 'Get a Pokemon by number ID' })
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully adquired.',
    type: GetPokemonDTO,
  })
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  // PATCH /pokemon/:id
  @Patch(':id')
  @ApiOperation({ summary: 'Update a Pokemon' })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: UpdatePokemonDto, description: 'The updated Pokemon data' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
    type: UpdatePokemonDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  update(
    @Param('id') id: string,
    @Body() updatePokemon: Prisma.PokemonUpdateInput,
  ) {
    return this.pokemonService.update(+id, updatePokemon);
  }

  // DELETE /pokemon/:id
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Pokemon' })
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 204,
    description: 'The record has been successfully deleted.',
    type: DeletePokemonDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  delete(@Param('id') id: string) {
    return this.pokemonService.delete(+id);
  }

  // GET /pokemon/weakAndResist/:id
  @Get('weak-and-resist/:id')
  @ApiOperation({ summary: "Get a Pokemon's weaknesses and resistances" })
  @ApiParam({ name: 'id' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully adquired.',
    type: ModificatorsPokemonDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  getWeakAndResist(@Param('id') id: string) {
    return this.pokemonService.getWeakAndResist(+id);
  }

  // POST /pokemon/battle/:id/:against
  @Get('/battle/:id/:against')
  @ApiOperation({ summary: "Get a Pokemon's battle result" })
  @ApiParam({ name: 'id' })
  @ApiParam({ name: 'against' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully adquired.',
    type: BattlePokemonDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  getBattleResult(@Param('id') id: string, @Param('against') against: string) {
    return this.pokemonService.getBattleResult(+id, +against);
  }
}
