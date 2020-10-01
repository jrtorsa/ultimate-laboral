import React from "react";
import { Vacations } from "../utils/vacations";

console.log(Vacations);

const Datos = () => {
  return (
    <div>
      <form>
        <div>
          <label>Salario Diario</label>
          <input type="text" />
        </div>
        <div>
          <label>Fecha de Ingreso</label>
          <input type="date" />
        </div>
        <div>
          <label>Fecha de Egreso</label>
          <input type="date" />
        </div>
        <div>
          <label>Vacaciones Correspondientes</label>
          <select>
            <option>-- Seleccione un Periodo --</option>
            {Vacations.map((time) => (
              <option key={time.id}>{time.period}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Datos;
