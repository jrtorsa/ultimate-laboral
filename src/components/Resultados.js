import React from "react";

const Resultados = ({ nuevoCalculo }) => {

  const nihtyDays = nuevoCalculo.salary * 90

  return (
    <div>
      <div>
        <p>90 dias: {nihtyDays}</p>
      </div>
    </div>
  );
};

export default Resultados;
