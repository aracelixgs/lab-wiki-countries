import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

function CountryDetails({ allCountries }) {

  const params = useParams();
  let initials = params.countryAlpha
  //console.log('hola', initials);
  //console.log(allCountries)
  //console.log(params);

 // const [ countryDetails, setCountryDetails ] = useState(allCountries)
  
const countryDetail = allCountries.find((country) => country.alpha3Code === initials)
console.log(countryDetail)
  
  return (
    <div>
        
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`} alt="flag" />
        <h1>{countryDetail.name.common}</h1>
        <h3>Capital: {countryDetail.capital}</h3>
        <h3>Area: {countryDetail.area} km</h3>
        
        {countryDetail.borders.map((each, index) => {
        return (
          
            <li key={index}> <Link to={`/${each}`}> {each}</Link></li>

        );
      })}
    </div>
  );
}

export default CountryDetails;
