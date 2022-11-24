import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  name: string;
  region: string;
  population: number;
  area: number;
  borders?: string;
}

const CountryInfo: React.FC<Props> = (
  {name, region, population, area, children}) => {

  return (
    <div>
      <p>Name: {name}</p>
      <p>Region: {region}</p>
      <p>Population: {population} </p>
      <p>Area: {area} km2</p>
      <p>Borders with:</p>
      {children}
    </div>
  );
};

export default CountryInfo;