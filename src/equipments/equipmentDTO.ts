import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEquipmentInput {
    @Field(() => String, { description: 'name of the equipment' })
    name: string;
    @Field( () => Number, { description: 'kwh of the equipment' })
    kwh: number;

    @Field(() => Number, { description: 'cost of the equipment' })
    cout: number;

    @Field(() => Number, { description: 'manufacturer id of the equipment' })
    manufacturerId: number;
}

@InputType()
export class UpdateEquipmentDTO {

    @Field(() => String, { description: 'name of the equipment', nullable: true })
    name?: string;
    @Field( () => Number, { description: 'kwh of the equipment', nullable: true  })
    kwh?: number;

    @Field(() => Number, { description: 'cost of the equipment', nullable: true  })
    cout?: number;

    @Field(() => Number, { description: 'manufacturer id of the equipment', nullable: true  })
    manufacturerId?: number;
}