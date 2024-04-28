import { Controller, Get } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';

@Controller()
export class EquipmentsController {
  constructor(private readonly equipmentService: EquipmentsService) {}

  @Get()
  getHello(): string {
    return this.equipmentService.getHello();
  }
}
