export interface Country {
  name: string;
  alpha3Code: string;
  independent: boolean;
}

export interface CountryInfo {
  name: string;
  population: number;
  region: string;
  area: string;
  borders: string [];
}