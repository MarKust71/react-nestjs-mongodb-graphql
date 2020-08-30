import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            debug: true,
            playground: true,
            // autoSchemaFile: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            url:
                'mongodb+srv://user:cZPwEj6S8sSMVX9R@cluster0-wcpwy.mongodb.net/react-nestjs-mongodb-graphql',
            validateOptions: { useUnifiedTopology: true },
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
