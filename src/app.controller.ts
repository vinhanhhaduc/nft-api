import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  listMessages() {}
  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
