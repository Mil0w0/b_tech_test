import { Injectable } from '@nestjs/common';
import {PrismaService } from "../prisma/prisma.service";
import { Equipment, Prisma } from '@prisma/client';

@Injectable()
export class EquipmentsService {
  constructor(private prisma: PrismaService) {}
/*
  id Int @default(autoincrement()) @id
  name String @db.VarChar(255)
  manufacturer Manufacturer @relation(fields: [manufacturerId], references: [id])
  manufacturerId Int
  kwh Int
  cout*/
  async createEquipment(createEquipmentDTO: Prisma.EquipmentCreateInput): Promise<Equipment> {
    return this.prisma.equipment.create(
        {data: createEquipmentDTO}
    );
  }

  async updateEquipment(id: number, updateEquipmentDto: Prisma.EquipmentUpdateInput): Promise<Equipment> {
    return this.prisma.equipment.update(
        {where: {id: id}, data: updateEquipmentDto}
    );
  }


}
