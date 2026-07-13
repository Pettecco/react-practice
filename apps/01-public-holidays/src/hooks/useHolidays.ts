import { useQuery } from '@tanstack/react-query';
import { fetchCountries, fetchHolidays } from '../services/api';

export function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}

export function useHolidays(countryCode: string | null) {
  const year = new Date().getFullYear();

  return useQuery({
    queryKey: ['holidays', countryCode, year],
    queryFn: () => fetchHolidays(countryCode!, year),
    enabled: !!countryCode, // Só faz fetch se tiver país selecionado
    staleTime: 1000 * 60 * 5,
  });
}
