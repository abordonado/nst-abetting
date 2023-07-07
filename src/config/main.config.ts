// Global imports
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';

export function mainConfig(app: INestApplication) {
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const limit = '10mb';
  app.use(json({ limit: limit }));
  app.use(urlencoded({ limit: limit, extended: true }));

  app.setGlobalPrefix('api');
}
