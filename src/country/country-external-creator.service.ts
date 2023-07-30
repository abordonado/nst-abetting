// Global imports
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

// Self imports
import { Country } from './schema/country.schema';

// Project imports
import { CountryDataProviderService } from '../data-provider/country-data-provider.service';



@Injectable()
export class CountryExternalCreatorService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
    private readonly countryDataProvider: CountryDataProviderService,
  ) { }

  async create() {
    let sanetizedExternalCountries = [];
    const externalCountries = this.countryDataProvider.findAll();

    (await externalCountries).map((country) => {
      const { flag, ...newCountry } = country;
      sanetizedExternalCountries.push(newCountry);
    });

    const bulkOps = sanetizedExternalCountries.map((country) => {
      return {
        updateOne: {
          filter: { name: country.name },
          update: { $set: country }, // Use $set to update only the fields provided in the new object
          upsert: true,
        },
      };
    });

    await this.countryModel.bulkWrite(bulkOps);

    return sanetizedExternalCountries;
  }
}
