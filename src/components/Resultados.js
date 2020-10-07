import React from "react";
import {calculateTime} from '../utils/calculateTime'
import { parseISO } from 'date-fns'


const Resultados = ({ nuevoCalculo }) => {

  const {firstDate, secondDate} = nuevoCalculo
  const daysWorked = calculateTime(parseISO(secondDate), parseISO(firstDate))
  
  const yearsWorked = daysWorked / 365

  const dailyIntegratedSalary =
    parseInt(nuevoCalculo.salary) + parseInt(nuevoCalculo.bonos);
  
  const nightyDays = dailyIntegratedSalary * 90;

  const twentyDays = dailyIntegratedSalary * 20 * yearsWorked

  return (
    <div>
      <div>
        <p>Salario Diario Integrado: ${dailyIntegratedSalary}</p>
        <p>90 dias: ${nightyDays}</p>
        <p>20 dias: ${twentyDays}</p>
      </div>
    </div>
  );
};

export default Resultados;
