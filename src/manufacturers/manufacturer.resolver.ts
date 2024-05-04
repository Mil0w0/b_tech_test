import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {PrismaService} from "../prisma/prisma.service";
import {CreateManufacturerInput} from "./manufacturerDTO";
import {Manufacturer} from "./manufacturer.model";


@Resolver(() => Manufacturer)
export class ManufacturerResolver {
  constructor(private readonly prisma: PrismaService) {
  }

  @Mutation(() => Manufacturer)
  async createManufacturer( @Args('input') data: CreateManufacturerInput): Promise<Manufacturer> {
    return this.prisma.manufacturer.create({
        data: {
            name: data.name
        }
        });
    }

    @Query(() => [Manufacturer])
    getManufacturers(): Promise<Manufacturer[]> {
        return this.prisma.manufacturer.findMany();
    }

}
