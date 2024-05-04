import { Injectable } from '@nestjs/common';
import {PrismaService } from "../prisma/prisma.service";
import {CreateEquipmentInput, UpdateEquipmentDTO} from "./equipmentDTO";
import {Equipment} from "./equipment.model";

@Injectable()
export class EquipmentsService {
  constructor(private prisma: PrismaService) {}

  async createEquipment(input: CreateEquipmentInput): Promise<Equipment> {
    return this.prisma.equipment.create({
      data: input
    });
  }

  async updateEquipment(id: number, updates: UpdateEquipmentDTO): Promise<Equipment> {
    return this.prisma.equipment.update(
        {where: {id: id}, data: updates}
    );
  }


}
