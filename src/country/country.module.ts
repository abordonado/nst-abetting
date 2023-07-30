// Global imports
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Self imports
import { CountryController } from './country.controller';
import { CountryExternalCreatorService } from './country-external-creator.service';
import { Country, CountrySchema } from './schema/country.schema';

// Other modules imports
import { DataProviderModule } from '../data-provider/data-provider.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
    DataProviderModule,
  ],
  controllers: [CountryController],
  providers: [CountryExternalCreatorService],
})
export class CountryModule {}
