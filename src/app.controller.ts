import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//1. validation
//2. authentention
//3. authorizatiion

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/world')
  getWorld(): string {
    return this.appService.getWelcome();
  }
}
