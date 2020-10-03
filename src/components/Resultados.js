import React from "react";

const Resultados = ({ nuevoCalculo }) => {
  const dailyIntegratedSalary =
    parseInt(nuevoCalculo.salary) + parseInt(nuevoCalculo.bonos);
  const nightyDays = nuevoCalculo.salary * 90;

  return (
    <div>
      <div>
        <p>Salario Diario Integrado: ${dailyIntegratedSalary}</p>
        <p>90 dias: ${nightyDays}</p>
      </div>
    </div>
  );
};

export default Resultados;
