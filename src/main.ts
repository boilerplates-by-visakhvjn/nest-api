import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Applies validation at global level across all modules
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips away keys that are not present in dtos
      transform: true, // transforms key into corresponding dto key type
    }),
  );

  // All endpoints will be prefixed /api now
  app.setGlobalPrefix('api');

  await app.listen(3000);
}

bootstrap();
