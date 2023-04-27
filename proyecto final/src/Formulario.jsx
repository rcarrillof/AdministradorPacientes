import React, { useState, useTransition } from "react";
import "./Formulario.css";
export default function Formulario() {
    const [mascota, setMascota] = useState("")
    const [paciente, setPacientes] = useState([])
    const [dueño, setDueño] = useState("")

    function agregarPacientes() {
        const informacion = {
            mascota, dueño, fecha, hora, sintomas
        }
        setPacientes([...pacientes,informacion]) /* los puntos para agregar lo que ya esta ahi*/
        setMascota("")
        setDueño("")
        setFecha("")
        setHora("")
        setSintomas("")
    }
    return (
        <div>
            <form className="inputForm" action="">
                <label htmlFor="mascota">nombre de mascota</label>
                <input id="mascota" onChange={(e) =>{ setMascota(e.target.value)}} value={mascota} type="text" />
                <label htmlFor="">Nombre dueño</label>
                <input onChange={(e) =>{ setDueño(e.target.value)}} value={dueño} type="text" />
                <button onChange={agregarPacientes}>Agregar</button>
                
            </form>
        </div>
    )
}
