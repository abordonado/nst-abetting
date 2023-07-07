// Global imports
import { NestApplication, NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

// Project imports
import { AppModule } from './app.module';
import { mainConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  mainConfig(app);

  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);

  const logger = new Logger(NestApplication.name);
  logger.log(`App listening at port ${port}`);
}
bootstrap();
