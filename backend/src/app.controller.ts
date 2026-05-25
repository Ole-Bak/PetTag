import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pets')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.getAllTags();
  }

  @Post('add')
  create(@Body() petData: any) {
    return this.appService.createPetTag(petData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() petData: any) {
    return this.appService.updatePetTag(id, petData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.deletePetTag(id);
  }
}
