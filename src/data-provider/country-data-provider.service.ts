import { HttpService } from '@nestjs/axios';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { catchError, lastValueFrom, map } from 'rxjs';
import configuration from 'src/config/configuration';
import { ExternalCountry, ExternalCountryResponse } from './external-country';

@Injectable()
export class CountryDataProviderService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(configuration.KEY)
    private configService: ConfigType<typeof configuration>,
  ) {}
  async findAll(): Promise<ExternalCountry[]> {
    //TODO: apiResponse.errors
    const apiResponse = await this.callExternalApi();

    //return externalCountries;
    return apiResponse.response;
  }

  private async callExternalApi(): Promise<ExternalCountryResponse> {
    const headersRequest = {
      'x-apisports-key': `${this.configService.apiSports.key}`,
    };

    const apiUrl = `${this.configService.apiSports.url}/countries`;

    const response$ = this.httpService
      .get(apiUrl, { headers: headersRequest })
      .pipe(
        map((response) => response.data),
        catchError((e) => {
          throw new HttpException(e.response, e.response.status);
        }),
      );

    return lastValueFrom(response$);
  }
}
