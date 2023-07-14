// Global imports
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Project imports
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environments, environmentsType, validationSchema } from './config';
import { TestModule } from './test/test.module';
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

    MongooseModule.forRoot('mongodb://localhost:27017', {
      user: 'root',
      pass: 'root',
      dbName: 'abetting',
    }),

    TestModule,
    ExternalCountryModule,
    DataProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
