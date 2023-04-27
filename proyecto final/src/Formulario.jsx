import React, { useState, useTransition } from "react";
import "./Formulario.css";
export default function Formulario() {
    const [mascota, setMascota] = useState("")
    const [paciente, setPacientes] = useState([])
    const [dueño, setDueño] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    function agregarPacientes() {
        const informacion = {
            mascota, dueño, fecha, hora, sintomas
        }
        setPacientes([...pacientes, informacion]) /* los puntos para agregar lo que ya esta ahi*/
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
                <input id="mascota" onChange={(e) => { setMascota(e.target.value) }} value={mascota} type="text" />
                <label htmlFor="">Nombre dueño</label>
                <input onChange={(e) => { setDueño(e.target.value) }} value={dueño} type="text" />
                <button onChange={agregarPacientes}>Fecha</button>
                <input onChange={(e) => { setFecha(e.target.value) }} value={fecha} type="date" />
                <button onChange={agregarPacientes}>Hora</button>
                <input onChange={(e) => { setHora(e.target.value) }} value={hora} type="time" />
                <textarea className="label" onChange={(e) => { setSintomas(e.target.value) }} value={sintomas} cols="30" rows="10"></textarea>
                <button onChange={agregarPacientes}>Agregar</button>
            </form>
        </div>
    )
}
