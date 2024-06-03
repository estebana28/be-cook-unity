import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello World for testing purposes' })
  @ApiResponse({
    status: 200,
    description: 'The api is up and running.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  getHello(): string {
    return this.appService.getHello();
  }
}
