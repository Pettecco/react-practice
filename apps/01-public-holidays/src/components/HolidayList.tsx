import type { Holiday } from '../types';

interface HolidayListProps {
  holidays: Holiday[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const HolidayList = ({ holidays }: HolidayListProps) => {
  const nationwideHolidays = holidays.filter((holiday) => holiday.nationwide);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {nationwideHolidays.map((holiday) => (
          <tr key={holiday.id}>
            <td>{formatDate(holiday.startDate)}</td>
            <td>{holiday.name[0]?.text}</td>
            <td>{holiday.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
