import React, { useState } from "react";
import { isFuture } from "date-fns";

const Datos = ({ iniciarCalculo }) => {
  const [data, setData] = useState({
    salary: 0,
    bonos: 0,
    firstDate: new Date(),
    secondDate: new Date(),
  });

  const [error, setError] = useState(false);

  const { salary, bonos, firstDate, secondDate } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalcular = (e) => {
    e.preventDefault();

    // validar
    if (
      salary.trim() === 0 ||
      firstDate.trim() === "" ||
      secondDate.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    iniciarCalculo(data);

    setData({
      salary: 0,
      bonos: 0,
      firstDate: "",
      secondDate: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleCalcular}>
        {error ? <p>Todos los campos son requeridos</p> : null}
        <div>
          <label>Salario</label>
          <input
            type="number"
            name="salary"
            value={salary}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bonos</label>
          <input
            type="number"
            name="bonos"
            value={bonos}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de Ingreso</label>
          <input
            type="date"
            name="firstDate"
            value={firstDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de Egreso</label>
          <input
            type="date"
            name="secondDate"
            value={secondDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default Datos;
