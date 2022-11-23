import React from 'react';

interface Props {
  name: string;
}

const CountryName: React.FC<Props> = ({name}) => {

  return (
    <>
      <p>{name}</p>
    </>
  );
};


export default CountryName;