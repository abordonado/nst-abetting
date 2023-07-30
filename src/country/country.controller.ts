// Global imports
import { Controller, Patch } from '@nestjs/common';

// Self imports
import { CountryExternalCreatorService } from './country-external-creator.service';

@Controller('country')
export class CountryController {
  constructor(
    private externalCountryCreatorService: CountryExternalCreatorService,
  ) {}

  @Patch()
  externalCreator() {
    return this.externalCountryCreatorService.create();
  }
}
