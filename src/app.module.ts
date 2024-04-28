import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProjectModule } from "./project/projet.module";
import { PrismaService } from './prisma/prisma.service';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: process.env.NODE_ENV !== 'production' ? true : false,
      playground: process.env.NODE_ENV !== 'production' ? true : false,
      typePaths: ['./graphql/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    ProjectModule
],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
