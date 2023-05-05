import React from "react";

export default function eliminarCita({ pacientes, setPacientes }) {
  const eliminarCita = () => {
    const newPacientes = pacientes.filter(paciente => paciente.dueño != dueño);
    setPacientes(newPacientes)
  }
  return (
    <div className="btn_eliminar">
      <button onClick={eliminarCita}>ELIMINAR CITA</button>
    </div>
  )
}