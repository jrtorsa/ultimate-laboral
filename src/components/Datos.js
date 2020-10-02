import React, {useState} from "react";
import { Vacations } from "../utils/vacations";


const Datos = () => {


  const [data, setData] = useState({
    salary: '',
    firstDate: '',
    secondDate: '',
    timeFrame: ''
  }) 

  const [error, setError] = useState(false)

  const { salary, firstDate, secondDate, timeFrame } = data

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value      
    })
  }

  const handleCalcular = e =>{
    e.preventDefault()

    // validar
    if( salary.trim() === '' || firstDate.trim() === '' || secondDate.trim() === '' || timeFrame.trim() === ''){
      setError(true)
      return
    } 
    setError(false)

    setData({
      salary: '',
    firstDate: '',
    secondDate: '',
    timeFrame: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleCalcular}>
      {error ? <p>Todos los campos son requeridos</p> : null}
        <div>
          <label>Salario Diario</label>
          <input type="text" name='salary' value={salary} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Ingreso</label>
          <input type="date" name='firstDate' value={firstDate} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Egreso</label>
          <input type="date" name='secondDate' value={secondDate} onChange={handleChange} />
        </div>
        <div>
          <label>Años Laborados</label>
          <select onChange={handleChange} name='timeFrame' value={timeFrame}>
            <option value=''>-- Seleccione un Periodo --</option>
            {Vacations.map((time) => (
              <option key={time.id}  value={time.period}>{time.id}</option>
            ))}
          </select>
        </div>
        <button type='submit'>Calcular</button>
      </form>
    </div>
  );
};

export default Datos;
