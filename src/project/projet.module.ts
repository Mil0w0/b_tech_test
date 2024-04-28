import { Module } from "@nestjs/common";
import {ProjectResolver} from "./project.resolver";
import {PrismaModule} from "../prisma/prisma.module";
import {PrismaService} from "../prisma/prisma.service";

@Module({
  imports: [],
  providers: [ProjectResolver, PrismaService],
})
export class ProjectModule {}
