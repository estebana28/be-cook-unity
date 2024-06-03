import { ApiProperty } from '@nestjs/swagger';

export class ModificatorsPokemonDto {
  @ApiProperty({
    example: 1,
    description: 'Id of pokemon to get weaknesses and resistances',
  })
  id: number;
}
