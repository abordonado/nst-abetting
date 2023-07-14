import { Controller, Get } from '@nestjs/common';
import { ExternalCountryFinder } from './external-country.service';
import { ExternalCountry } from 'src/data-provider/external-country';

@Controller('external-country')
export class ExternalCountryController {
  constructor(private readonly externalCountryFinder: ExternalCountryFinder) {}

  @Get()
  findAll(): Promise<ExternalCountry[]> {
    return this.externalCountryFinder.findAll();
  }
}
