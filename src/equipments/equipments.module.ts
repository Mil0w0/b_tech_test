
import { Module } from '@nestjs/common';

import { EquipmentsService } from './equipments.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import {EquipmentsController} from "./equipments.controller";


@Module({

    controllers: [EquipmentsController],

    providers: [EquipmentsService],

    imports: [PrismaModule],

})

export class EquipmentsModule {}

