import { useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import Header from './Header'
import Paciente from './Paciente'
import eliminarCita from './eliminarCita'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="App">
      <div className='section'>
        <div className='formulario col-6'>
          <Header className='' titulo={"Crear paciente"} />
          <Formulario pacientes={pacientes} setPacientes={setPacientes} />
         
        </div>
        <div className="clientes col-6">
          <Header titulo={"Lista de pacientes"} />
          {pacientes.map((paciente) => {
            return <Paciente nombre={paciente.mascota} dueño={paciente.dueño} fecha={paciente.fecha} hora={paciente.hora} sintomas={paciente.sintomas} />
            
          })}
        </div>
      </div>
    </div>
  )
}

export default App
