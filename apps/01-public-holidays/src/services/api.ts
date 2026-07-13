import axios from 'axios';
import type { Country, Holiday } from '../types';

const API_BASE_URL = 'https://openholidaysapi.org';

export async function fetchCountries(): Promise<Country[]> {
  const response = await axios.get(
    `${API_BASE_URL}/Countries?languageIsoCode=en`
  );
  return response.data;
}

export async function fetchHolidays(
  countryCode: string,
  year: number
): Promise<Holiday[]> {
  const validFrom = `${year}-01-01`;
  const validTo = `${year}-12-31`;

  const response = await axios.get(`${API_BASE_URL}/PublicHolidays`, {
    params: {
      countryIsoCode: countryCode,
      languageIsoCode: 'en',
      validFrom,
      validTo,
    },
  });
  return response.data;
}
