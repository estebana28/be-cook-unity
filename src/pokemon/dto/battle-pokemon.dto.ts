import { ApiProperty } from '@nestjs/swagger';

export class BattlePokemonDto {
  @ApiProperty({ example: 6, description: 'Pokemon ID selected as contender' })
  id: number;

  @ApiProperty({ example: 160, description: 'Pokemon ID selected as oponent' })
  against: number;
}
