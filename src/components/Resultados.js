import React from "react";

const Resultados = ({ nuevoCalculo }) => {
  const dailyIntegratedSalary =
    parseInt(nuevoCalculo.salary) + parseInt(nuevoCalculo.bonos);
  const years = parseInt(nuevoCalculo.timeFrame);
  console.log(nuevoCalculo.timeFrame);

  const nightyDays = dailyIntegratedSalary * 90;

  const twentyDays = dailyIntegratedSalary * 20 * years;

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
