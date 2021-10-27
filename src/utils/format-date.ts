export const formatDate = (date: Date) =>
  date.toLocaleString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
