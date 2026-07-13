import type { Country } from '../types';

interface CountrySelectProps {
  countries: Country[];
  selectedCountry: string;
  onChange: (countryCode: string) => void;
}

export const CountrySelect = ({
  countries,
  selectedCountry,
  onChange,
}: CountrySelectProps) => (
  <div className="form-group">
    <label htmlFor="country">Country:</label>
    <select
      id="country"
      className="form-control"
      value={selectedCountry}
      onChange={(e) => onChange(e.target.value)}
    >
      {countries.map((country) => (
        <option key={country.isoCode} value={country.isoCode}>
          {country.name[0]?.text} ({country.isoCode})
        </option>
      ))}
    </select>
  </div>
);
