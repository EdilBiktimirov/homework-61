import React from 'react';
import './CountryName.css';

interface Props {
  name: string;
  onCountryClick?: React.MouseEventHandler;
}

const CountryName: React.FC<Props> = ({name, onCountryClick}) => {
  return (
    <>
      <p className="CountryName" onClick={onCountryClick}>{name}</p>
    </>
  );
};


export default CountryName;