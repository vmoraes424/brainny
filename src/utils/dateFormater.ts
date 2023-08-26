import { format } from 'date-fns';

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return format(date, 'dd/MM/yy'); // Formato de data: "dia/mes/ano"
}

export function formatTime(timeString: string): string {
  const date = new Date(timeString);
  return format(date, 'HH:mm') + 'h'; // Formato de hora: "hora:minutoh"
}

export function formatDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  return format(date, 'dd/MM/yyyy HH:mm:ss');
}