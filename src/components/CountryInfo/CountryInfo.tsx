import React, {PropsWithChildren} from 'react';
import './CountryInfo.css';

interface Props extends PropsWithChildren {
  name: string;
  region: string;
  population: number;
  area: number;
  borders?: string;
  url: string;
}

const CountryInfo: React.FC<Props> = (
  {name, region, population, area, url, children}) => {

  return (
    <div className="CountryInfo">
      <img src={url} alt="#"/>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population} </p>
      <p><strong>Area:</strong> {area} km2</p>
      <p><strong>Borders with:</strong></p>
      {children}
    </div>
  );
};

export default CountryInfo;