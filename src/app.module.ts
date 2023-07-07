// Global imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Project imports
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environments, environmentsType, validationSchema } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        environments[(process.env.NODE_ENV as environmentsType) || ''] ||
        'test.env',
      load: [configuration],
      isGlobal: true,
      validationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
