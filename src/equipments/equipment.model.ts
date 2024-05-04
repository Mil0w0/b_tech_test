import { Field, ObjectType } from '@nestjs/graphql';
import  { Equipment as EquipmentDB } from '@prisma/client';

@ObjectType()
export class Equipment {
    @Field(() => Number, { description: 'id of the equipment' })
    id: EquipmentDB[`id`];

    @Field(() => String, { description: 'name of the equipment' })
    name: EquipmentDB[`name`];

    @Field( () => Number, { description: 'kwh of the equipment' })
    kwh: EquipmentDB[`kwh`];

    @Field( () => Number, { description: 'cost of the equipment' })
    cout: EquipmentDB[`cout`];

    @Field( () => Number, { description: 'manufacturer id of the equipment' })
    manufacturerId: EquipmentDB[`manufacturerId`];
}