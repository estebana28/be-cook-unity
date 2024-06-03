import { ApiProperty } from '@nestjs/swagger';

export class GetPokemonDTO {
  @ApiProperty({
    type: Number,
    example: 25,
  })
  id: number;
}
