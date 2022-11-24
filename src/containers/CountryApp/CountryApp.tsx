import React, {useCallback, useEffect, useState} from 'react';
import type {Country, CountryInf} from "../../types";
import axios from "axios";
import CountryName from "../../components/Country/CountryName";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import './CountryApp.css';

const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';
const COUNTRY_URL = 'https://restcountries.com/v2/alpha/';

const CountryApp = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const [country, setCountry] = useState<CountryInf>({
    name: '',
    population: 0,
    region: '',
    area: 0,
    borders: []
  });

  const [borders, setBorders] = useState<string[]>([]);

  const getData = useCallback(async () => {
    const response = await axios.get<Country[]>(COUNTRIES_URL);

    response.data.map((elem) => {
      return setCountries((prev) => ([...prev, elem]));
    })
  }, [])

  useEffect(() => {
    getData().catch(console.error);
  }, [getData]);

  const getCountry = useCallback(async (code: string) => {
    const copyBorders = [...borders];
    copyBorders.splice(0, copyBorders.length);
    setBorders(copyBorders);

    const response = await axios.get<CountryInf>(COUNTRY_URL + code);

    setCountry((prev) => (
      {
        ...prev,
        name: response.data.name,
        population: response.data.population,
        region: response.data.region,
        area: response.data.area,
        borders: response.data.borders,
      }));

    if (response.data.borders !== undefined) {
      const promises = response.data.borders.map(async (elem) => (
        await axios.get<CountryInf>(COUNTRY_URL + elem)
      ))
      const bordersName  = await Promise.all(promises);

      bordersName.forEach((elem) => {
        setBorders((prev) => [...prev, elem.data.name]);
      });
    }
  }, [borders]);

  let countryDescription = <div>Choose country</div>;

  if (country.name !== '') {
    countryDescription = (
      <CountryInfo
        name={country.name}
        area={country.area}
        region={country.region}
        population={country.population}
        key={Math.random()}>
        {borders.map((elem) => {
          console.log('here borders')
          console.log(borders);
          return <CountryName name={elem} key={Math.random()}/>
        })}
      </CountryInfo>
    )
  }

  return (
    <div className="CountryApp">
      <div className='Countries'>
        {countries.map((elem) => {
          return <CountryName
            name={elem.name}
            key={Math.random()}
            onCountryClick={() => getCountry(elem.alpha3Code)}/>
        })}
      </div>
      {countryDescription}
    </div>
  );
};

export default CountryApp;