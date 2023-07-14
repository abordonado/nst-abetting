import { Module } from '@nestjs/common';
import { ExternalCountryController } from './external-country.controller';
import { ExternalCountryFinder } from './external-country.service';
import { DataProviderModule } from 'src/data-provider/data-provider.module';

@Module({
  imports: [DataProviderModule],
  controllers: [ExternalCountryController],
  providers: [ExternalCountryFinder],
})
export class ExternalCountryModule {}
