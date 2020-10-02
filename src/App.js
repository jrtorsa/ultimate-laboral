import React, { useState } from "react";
import Datos from "./components/Datos";
import Resultados from "./components/Resultados";

function App() {
  const [calculos, setCalculo] = useState([]);

  const iniciarCalculo = (calculo) => {
    setCalculo({ ...calculos, calculo });
  };

  const mensaje =
    calculos.length === 0
      ? "Llena los Campos para Hacer un Calculo"
      : "Los Resultados son los siguientes... ";
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Calculadora Laboral</h1>

      <div className="row">
        <div className="one-half column">
          <Datos iniciarCalculo={iniciarCalculo} />
        </div>
        <div className="one-half column">
          <h6>{mensaje}</h6>
          {calculos.map((nuevoCalculo) => (
            <Resultados key={nuevoCalculo.id} calculo={nuevoCalculo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
