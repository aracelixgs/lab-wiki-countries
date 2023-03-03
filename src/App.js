import './App.css';
import countries from './countries.json';
import Navbars from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [allCountries, setAllCountries] = useState(countries);
  //console.log(allCountries)

  return (
    <div className="App">
      <Navbars />

      <div className="container">
        <div className="row">
          <CountriesList allCountries={allCountries} />

          <Routes>
            <Route
              path="/:countryAlpha"
              element={<CountryDetails allCountries={allCountries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
