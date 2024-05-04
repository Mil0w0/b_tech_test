import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {PrismaService} from "../prisma/prisma.service";
import {EquipmentsService} from "./equipments.service";
import { Equipment } from "./equipment.model";
import {CreateEquipmentInput, UpdateEquipmentDTO} from "./equipmentDTO";

@Resolver(() => Equipment)
export class EquipmentResolver {
  constructor(private readonly prisma: PrismaService, private readonly equipmentService: EquipmentsService) {
  }

  @Mutation(() => Equipment)
  async createEquipment( @Args('input') data: CreateEquipmentInput): Promise<Equipment> {
    return this.equipmentService.createEquipment(data);
  }

  @Mutation(() => Equipment)
  async updateEquipment(@Args('input') data: UpdateEquipmentDTO, @Args('id') id:number): Promise<Equipment> {
    return this.equipmentService.updateEquipment(id, data);
  }

  //README: Cette query permet de récupérer l’ensemble des équipements présent dans la base de données.
  @Query(() => [Equipment], { description: 'Get all equipments' })
  async ListEquipments(): Promise<Equipment[]> {
    return this.prisma.equipment.findMany();
  }

  //README: Cette query permet de récupérer un équipement en fonction de son ID
  @Query(() => Equipment, { description: 'Get an equipment by id' } )
  async Equipment(@Args('id') id: number): Promise<Equipment> {
    return this.prisma.equipment.findUnique({
        where: {
            id: id
        }
      });
    }

}
