export interface Country {
  name: string;
  alpha3Code: string;
  independent: boolean;
}

export interface CountryInf {
  name: string;
  population: number;
  region: string;
  area: number;
  borders: string [];
}