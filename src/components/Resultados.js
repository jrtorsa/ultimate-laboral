import React from "react";
import { calculateTime } from "../utils/calculateTime";
import { calculateAntique } from "../utils/calculateAntique";
import { calculateProportionalDays } from "../utils/calculateProportionalDays";
import { calculateVacations } from "../utils/calculateVacations";
import { parseISO } from "date-fns";
import { vacations } from "../utils/vacations";

const minWage = 123.22;

const Resultados = ({ nuevoCalculo }) => {
  const { firstDate, secondDate } = nuevoCalculo;

  const daysWorked = calculateTime(parseISO(secondDate), parseISO(firstDate));
  const proportional = calculateProportionalDays(daysWorked);
  const monthsWorked = Math.round(proportional / 30);
  const yearsWorked = Math.round(daysWorked / 365);

  const lastDays = calculateVacations(parseISO(secondDate));
  console.log(lastDays);

  const dailyIntegratedSalary =
    parseInt(nuevoCalculo.salary) + parseInt(nuevoCalculo.bonos);

  const antique = calculateAntique(minWage, dailyIntegratedSalary);

  const nightyDays = dailyIntegratedSalary * 90;

  const twentyDays = dailyIntegratedSalary * 20 * yearsWorked;

  const twelveDays = Math.round(antique * yearsWorked * 12);
  return (
    <div>
      <div>
        <p>Salario Diario Integrado: ${dailyIntegratedSalary}</p>
        <p>
          Tiempo Trabajado: {yearsWorked} años con {monthsWorked} meses
        </p>
        <p>90 dias: ${nightyDays}</p>
        <p>20 dias: ${twentyDays}</p>
        <p>12 dias: ${twelveDays}</p>
      </div>
    </div>
  );
};

export default Resultados;
