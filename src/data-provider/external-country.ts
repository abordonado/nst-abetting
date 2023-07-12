export class ExternalCountryResponse {
  readonly get: string;
  readonly parameters: unknown;
  readonly errors: unknown;
  readonly results: number;
  readonly paging: ExternalCountryPagingResponse;
  readonly response: ExternalCountry[];
}

export class ExternalCountryPagingResponse {
  readonly current: number;
  readonly total: number;
}

export class ExternalCountry {
  readonly name: string;
  readonly code: string;
  readonly flag: string;
}
