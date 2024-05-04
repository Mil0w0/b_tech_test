import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateManufacturerInput {
    @Field(() => String, { description: 'name of the manufacturer' })
    name: string;
}