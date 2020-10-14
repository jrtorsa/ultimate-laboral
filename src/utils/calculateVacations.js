import { startOfYear, parseISO, differenceInCalendarDays } from "date-fns";

export const calculateVacations = (second) => {
  const yearStart = startOfYear(second);
  const differenceCurrentYear = differenceInCalendarDays(second, yearStart);

  return differenceCurrentYear;
};
