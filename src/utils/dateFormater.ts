import { format } from 'date-fns';

// Função para formatar uma data e hora
export function formatDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  return format(date, 'dd/MM/yyyy HH:mm:ss');
}

// Exemplo de uso
const originalDateTime = '2023-08-26T01:29:06.814Z';
const formattedDateTime = formatDateTime(originalDateTime);

console.log(formattedDateTime); // Saída: 26/08/2023 01:29:06
