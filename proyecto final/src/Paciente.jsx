import React from "react";
import "./Paciente.css"

export default function Pacientes({nombre, dueño, fecha, hora, sintomas}){

    return(
        <div className="pacienteContainer">
            <h2>Nombre:  {nombre}</h2>
            <h2>Dueño: {dueño}</h2>
            <h2>Fecha: {fecha}</h2>
            <h2>Hora: {hora}</h2>
            <h2>Sintomas: {sintomas}</h2>
        </div>
    )
}
