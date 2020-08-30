import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            debug: true,
            playground: true,
            // autoSchemaFile: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url: process.env.DB_CONNECT_STRING,
            validateOptions: {
                useUnifiedTopology: true,
                retryWrites: true,
                w: 'majority',
            },
            entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
            synchronize: true,
            useNewUrlParser: true,
            logging: true,
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
