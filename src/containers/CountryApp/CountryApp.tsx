import React, {useCallback, useEffect, useState} from 'react';
import type {Country, CountryInfo} from "../../types";
import axios from "axios";
import CountryName from "../../components/Country/CountryName";


const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';
const COUNTRY_URL = 'https://restcountries.com/v2/alpha/';

const CountryApp = () => {

  const [countries, setCountries] = useState<Country[]>([]);

  const [country, setCountry] = useState<CountryInfo>({
    name: '',
    population: 0,
    region: '',
    area: '',
    borders: []
  });

  const getData = useCallback(async () => {
    const response = await axios.get<Country[]>(COUNTRIES_URL);

    response.data.map((elem) => {
      return setCountries((prev) => ([...prev, elem]));
    })
  }, [])

  useEffect(() => {
    getData().catch(console.error);
  }, [getData]);

  console.log(countries);

  const getCountry = useCallback(async (code: string) => {
    const response = await axios.get<CountryInfo>(COUNTRY_URL + code);

    setCountry((prev) => (
      {...prev,
        name: response.data.name,
        population: response.data.population,
        region: response.data.region,
        area: response.data.area,
        borders: response.data.borders,
      }))




  }, [])

  // useEffect(() => {
  //   getCountry('KGZ').catch(console.error);
  // }, [getCountry])
  //
  // console.log(country);

  return (
    <div>
      {countries.map((elem) => {
        return <CountryName name={elem.name} key={Math.random()}/>
      })}
    </div>
  );
};

export default CountryApp;