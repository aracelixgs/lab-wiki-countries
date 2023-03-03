import { Link } from 'react-router-dom'


function CountriesList({ allCountries }) {

  return (
    <div>
      <h4>Listado de paises</h4>

      {allCountries.map((each) => {
        return (
          <div div class="container">
            <Link
              className="list"
              to={`/${each.alpha3Code}`}
              key={each.alpha3Code}
            >
              {each.name.official}
              <br />
              <img key={each.alpha3Code} src={`https://flagpedia.net/data/flags/icon/72x54/${each.alpha2Code.toLowerCase()}.png`} alt={each.alpha3Code} />
            </Link>
           
          </div>
        );
      })}
    </div>
  );
}
export default CountriesList;

