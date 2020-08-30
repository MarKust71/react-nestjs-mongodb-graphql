import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    if (!process.env.PORT)
        Logger.log(`.ENV problem: ${process.env.PORT}`, 'Env');
    const port = process.env.PORT || 4000;
    await app.listen(port);
    Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
