import { Injectable } from '@nestjs/common';
import { CountryDataProviderService } from '../data-provider/country-data-provider.service';
import { ExternalCountry } from 'src/data-provider/external-country';

@Injectable()
export class ExternalCountryFinder {
  constructor(
    private readonly countryDataProvider: CountryDataProviderService,
  ) {}

  findAll(): Promise<ExternalCountry[]> {
    return this.countryDataProvider.findAll();
  }
}
