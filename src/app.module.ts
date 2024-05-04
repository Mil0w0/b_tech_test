import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma/prisma.service';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {EquipmentsModule} from "./equipments/equipments.module";
import {ManufacturerModule} from "./manufacturers/manufacturer.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({

      driver: ApolloDriver,
      debug: process.env.NODE_ENV !== 'production' ? true : false,
      playground: process.env.NODE_ENV !== 'production' ? true : false,
     /* typePaths: ['./graphql/schema/!*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },*/
      autoSchemaFile: true,
    }),
      EquipmentsModule,
      ManufacturerModule
],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
