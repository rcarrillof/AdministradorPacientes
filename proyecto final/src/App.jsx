import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Formulario'
import Header from './Header'
import Paciente from './Paciente'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="App">
      <div>
        <Header titulo="Crear un paciente" />
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
      </div>
      <div>
        <Header titulo="Listado de pacientes" />
        <Paciente/>
        {pacientes.map((paciente)=>{
          return <Paciente nombre={paciente.mascota} dueño={paciente.dueño} />
        }) }
      </div>
    </div>
  )
}

export default App
