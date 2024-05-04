import {Field, ObjectType} from "@nestjs/graphql";
import {Manufacturer as ManufacturerDB} from "@prisma/client";

@ObjectType()
export class Manufacturer {

    @Field(() => Number, { description: 'id of the equipment' })
    id: ManufacturerDB[`id`];

    @Field(() => String, { description: 'name of the manufacturer' })
    name: ManufacturerDB[`name`];
}