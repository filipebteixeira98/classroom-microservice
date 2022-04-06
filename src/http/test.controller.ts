import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from './auth/authorization.guard';

@Controller('test')
export class TestController {
  @Get()
  @UseGuards(AuthorizationGuard)
  handleAuthentication() {
    return 'Authentication route';
  }
}
