
import { Module } from '@nestjs/common';

import { EquipmentsService } from './equipments.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EquipmentResolver } from './equipment.resolver'
@Module({

    providers: [EquipmentResolver, EquipmentsService],

    imports: [PrismaModule],

})

export class EquipmentsModule {}

