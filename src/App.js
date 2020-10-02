import React from "react";
import Datos from "./components/Datos";

function App() {
  return (
    <div className='container'>
            <h1 style={{textAlign:'center'}}>Calculadora Laboral</h1>

      <div className='row'>
        <div className='one-half column'>
      <Datos />
        </div>
        <div className='one-half column'>2</div>
      </div>
    </div>
  );
}

export default App;
