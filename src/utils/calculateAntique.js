export const calculateAntique = (minWage = 123.22, dailyIntegratedSalary) => {
  if (dailyIntegratedSalary > minWage * 2) {
    dailyIntegratedSalary = 246.44;
  }
  return dailyIntegratedSalary;
};
