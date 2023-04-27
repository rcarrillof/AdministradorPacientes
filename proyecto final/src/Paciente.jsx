import React from "react";
import "./Paciente.css"

export default function Pacientes({nombre, dueño}){
    return(
        <div className="pacienteContainer">
            <h2>Nombre:  {nombre}</h2>
            <h2>Dueño: {dueño}</h2>
        </div>
    )
}