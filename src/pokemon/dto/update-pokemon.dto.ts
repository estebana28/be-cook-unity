import { ApiProperty } from '@nestjs/swagger';

export class UpdatePokemonDto {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({
    example:
      'An electric-type Pokemon known for its speed. A very Popular Pokemon',
    description: 'A brief description of the Pokemon',
  })
  description: string;
}
