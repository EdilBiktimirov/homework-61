import React from 'react';

interface Props {
  name: string;
  onCountryClick?: React.MouseEventHandler;
}

const CountryName: React.FC<Props> = ({name, onCountryClick}) => {
  return (
    <>
      <p className="CountryApp" onClick={onCountryClick}>{name}</p>
    </>
  );
};


export default CountryName;