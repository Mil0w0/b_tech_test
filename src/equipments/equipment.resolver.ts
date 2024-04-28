import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {PrismaService} from "../prisma/prisma.service";
import {Prisma, Equipment} from "@prisma/client";
import {EquipmentsService} from "./equipments.service";


type createEquipmentDTO = Prisma.EquipmentCreateInput ;
type updateEquipmentDTO = Prisma.EquipmentUpdateInput ;

@Resolver()
export class EquipmentResolver {
  constructor(private readonly prisma: PrismaService, private readonly equipmentService: EquipmentsService) {
  }

  @Mutation('')
  async createEquipment(data: createEquipmentDTO): Promise<Equipment> {
    return this.equipmentService.createEquipment(data);
  }

  @Mutation('')
  async updateEquipment(@Args('input') id: string,data: updateEquipmentDTO): Promise<Equipment> {
    return this.equipmentService.updateEquipment(parseInt(id), data);
  }

  //README: Cette query permet de récupérer l’ensemble des équipements présent dans la base de données.
  @Query('equipments')
  async listEquipment(): Promise<Equipment[]> {
    return this.prisma.equipment.findMany();
  }

  //README: Cette query permet de récupérer un équipement en fonction de son ID
  @Query()
  async getEquipment(@Args('id') id: string): Promise<Equipment> {
    return this.prisma.equipment.findUnique({
        where: {
            id: parseInt(id)
        }
      });
    }

}
