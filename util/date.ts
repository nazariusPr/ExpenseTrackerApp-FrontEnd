export function getFormattedDate(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate() + 1}`;
}

export function getDateMinusDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDay() - days);
}
