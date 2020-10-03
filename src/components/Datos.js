import React, { useState } from "react";
import { Vacations } from "../utils/vacations";

const Datos = ({ iniciarCalculo }) => {
  const [data, setData] = useState({
    salary: 0,
    bonos: 0,
    firstDate: "",
    secondDate: "",
    timeFrame: "",
    id: new Date(),
  });

  const [error, setError] = useState(false);

  const { salary, bonos, firstDate, secondDate, timeFrame } = data;

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
      secondDate.trim() === "" ||
      timeFrame.trim() === ""
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
      timeFrame: "",
      id: "",
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
        <div>
          <label>Años Laborados</label>
          <select onChange={handleChange} name="timeFrame" value={timeFrame}>
            <option value="">-- Seleccione un Periodo --</option>
            {Vacations.map((time) => (
              <option key={time.id} value={time.period}>
                {time.id}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default Datos;
