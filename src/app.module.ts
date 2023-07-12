// Global imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Project imports
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environments, environmentsType, validationSchema } from './config';
import { ExternalCountryModule } from './external-country/external-country.module';
import { DataProviderModule } from './data-provider/data-provider.module';

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
    ExternalCountryModule,
    DataProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
