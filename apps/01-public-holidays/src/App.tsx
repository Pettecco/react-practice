import { useState } from 'react';
import { useCountries, useHolidays } from './hooks/useHolidays';
import { CountrySelect } from './components/CountrySelect';
import { HolidayList } from './components/HolidayList';
import { Loading } from './components/Loading';

export function App() {
  const [selectedCountry, setSelectedCountry] = useState('NL');

  const { data: countries = [], isLoading: loadingCountries } = useCountries();
  const { data: holidays = [], isLoading: loadingHolidays } =
    useHolidays(selectedCountry);

  const year = new Date().getFullYear();

  if (loadingCountries) {
    return <Loading message="Loading countries..." />;
  }

  return (
    <div className="paper-container" style={{ padding: '24px' }}>
      <h1> Public Holidays {year}</h1>

      <CountrySelect
        countries={countries}
        selectedCountry={selectedCountry}
        onChange={setSelectedCountry}
      />

      {loadingHolidays ? (
        <Loading message="Loading holidays..." />
      ) : (
        <HolidayList holidays={holidays} />
      )}
    </div>
  );
}
