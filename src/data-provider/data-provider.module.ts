import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CountryDataProviderService } from './country-data-provider.service';
import { ConfigModule } from '@nestjs/config';

const dataProviders = [CountryDataProviderService];

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [...dataProviders],
  exports: [...dataProviders],
})
export class DataProviderModule {}
