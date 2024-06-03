import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@prisma/client';

export class CreatePokemonDto {
  @ApiProperty({ example: 25, description: 'The ID of the Pokemon' })
  id: number;

  @ApiProperty({ example: 'Pikachu', description: 'The name of the Pokemon' })
  name: string;

  @ApiProperty({ example: 'ELECTRIC', description: 'The type of the Pokemon' })
  type: Type;

  @ApiProperty({
    example: 'An electric-type Pokemon known for its speed.',
    description: 'A brief description of the Pokemon',
  })
  description: string;

  @ApiProperty({ example: 'Common', description: 'The rarity of the Pokemon' })
  rarity: string;

  @ApiProperty({
    example: 'Base',
    description: 'The expansion set of the Pokemon',
  })
  expansion: string;

  @ApiProperty({ example: 55, description: 'The attack power of the Pokemon' })
  attack: number;

  @ApiProperty({ example: 35, description: 'The hit points of the Pokemon' })
  hp: number;

  @ApiProperty({
    example: 'http://example.com/image.png',
    description: 'The image URL of the Pokemon',
  })
  image: string;

  @ApiProperty({
    example: ['GROUND', 'ROCK'],
    description: 'The weaknesses of the Pokemon',
    type: [String],
  })
  weaknesses: Type[];

  @ApiProperty({
    example: ['ELECTRIC', 'FLYING'],
    description: 'The resistances of the Pokemon',
    type: [String],
  })
  resistances: Type[];
}
