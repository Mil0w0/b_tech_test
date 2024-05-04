
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import {ManufacturerResolver} from "./manufacturer.resolver";

@Module({

    providers: [ManufacturerResolver],

    imports: [PrismaModule],

})
export class ManufacturerModule {}

