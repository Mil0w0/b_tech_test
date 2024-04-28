import {Query, Resolver} from "@nestjs/graphql";
import {PrismaService} from "../prisma/prisma.service";

@Resolver('project')
export class ProjectResolver {

  constructor(private readonly prisma: PrismaService) {}

  @Query()
  async project() {
    return {
      name: "Beeldi-api"
    };
  }
}
