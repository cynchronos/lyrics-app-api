const { Controller, Dependencies, Get } = require('@nestjs/common');
const { AppService } = require('./app.service');

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
