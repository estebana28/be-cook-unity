import { ApiProperty } from '@nestjs/swagger';

export class DeletePokemonDto {
  @ApiProperty({ example: 25, description: 'Pokemon id to be deleted' })
  id: number;
}
