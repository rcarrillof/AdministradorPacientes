import { useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import Header from './Header'
import Paciente from './Paciente'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="App">
      <div className="t_principal">
        <Header titulo={"Crear paciente"} />
      </div>
      <div className="t_lista">
        <Header titulo={"Listado de pacientes"} />
      </div>
      <div className='formulario'>
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />

        <Paciente />
        {pacientes.map((paciente) => {
          return <Paciente nombre={paciente.mascota} dueño={paciente.dueño} />
        })}
      </div>
    </div>
  )
}

export default App
